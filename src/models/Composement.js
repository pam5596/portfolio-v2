import { google } from "googleapis";
import Supabase from "/src/models/Supabase.js";

export default class Composement extends Supabase{
    constructor(youtubeApiKey, playListId, supabaseUrl, supabaseKey){
        super(supabaseUrl, supabaseKey);
        this.playListId = playListId;
        this.youtube = google.youtube({
            version: 'v3',
            auth: youtubeApiKey
        });
    };

    // プレイリストの情報を取得
    async getPlaylistMusic(){
        const youtube_response = await this.youtube.playlistItems.list({
            part: 'snippet',
            playlistId: this.playListId,
            maxResults: 50
        });

        const data = youtube_response.data.items
            .map((music)=>{
            
            // 詳細情報を行ごとに取得
            const detail_inline = music.snippet.description.split('\n');

            return {
                title: music.snippet.title.split(' - ')[1],
                genre: detail_inline[0].replace('Genre:', ''),
                src: detail_inline[1].replace('Artwork:', ''),
                youtube: `https://www.youtube.com/watch?v=${music.snippet.resourceId.videoId}`,
                twitter: detail_inline[2].replace('Twitter:', ''),
                soundcloud: detail_inline[3].replace('SoundCloud:', ''),
                time: music.snippet.publishedAt
            }
        });
        return { data: data };
    };

    // Composementの情報を取得
    async select_all() {
        const { data, error } = await this.supabase
            .from('works-composement')
            .select();
        
        if (error) { // エラーが発生した場合
            return { data: null, error: error };
        
        // 24時間以内に更新されたデータがある場合
        } else if (data[0].upsert_date == new Date()){
            return { data, error }
        
        // 24時間以内に更新されたデータがない場合
        } else {
            return this.upsert();
        }
    };

    // Composementの情報を更新
    async upsert() {
        const new_data = await this.getPlaylistMusic();

        // supabaseへのクエリデータを整形
        const query_data = new_data.data
            .map((column, index)=>{ return {id: index+1, ...column, upsert_date: new Date()}});
        
        // すべてのデータを削除し、新しいデータを挿入
        const { delete_error } = await this.supabase
            .from('works-composement')
            .delete()
            .neq("id", 0)

        if (delete_error) {
            return { message: null, error: delete_error };
        } else {
            const { insert_error } = await this.supabase
                .from('works-composement')
                .insert(query_data)

            if (insert_error) {
                return { data: null, error: insert_error };
            } else {
                return { data: new_data , error: null };
            };
        };
    }
};