import Supabase from "/src/models/Supabase.js";

/**
    ## Skills - Devops model
    
    skills - devopsに関するデータを扱うモデル

    ### functions
    - `select_all` - devopsのデータを取得する
    - `upsert` - devopsのデータを更新する（一括削除->一括挿入）
**/

export default class Devops extends Supabase {
    constructor(supabaseUrl, supabaseKey) {
        super(supabaseUrl, supabaseKey);
    }

    async select_all() {
        const { data, error } = await this.supabase
            .from('skills-devops')
            .select('title, value, comment');
        
        return { data: {techs: data}, error };
    };

    async upsert(new_data) {
        // supabaseへのクエリデータを整形
        const query_data = new_data.techs
            .map((column, index)=>{ return {id: index+1, ...column}});

        // すべてのデータを削除し、新しいデータを挿入
        const { delete_error } = await this.supabase
            .from('skills-devops')
            .delete()
            .neq("id", 0)
        
        if (delete_error) {
            return { message: null, error: delete_error };
        } else {
            const { insert_error } = await this.supabase
                .from('skills-devops')
                .insert(query_data);

            if (insert_error) {
                return { message: null, error: insert_error };
            } else {
                return { message: "Devopsのデータを更新しました。", error: null};
            }
        }
    };
}