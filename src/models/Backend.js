import Supabase from "/src/models/Supabase.js";

/**
    ## Skills - Backend model
    
    skills - backendに関するデータを扱うモデル

    ### functions
    - `select_all` - backendのデータを取得する
    - `upsert` - backendのデータを更新する（一括削除->一括挿入）
**/

export default class Backend extends Supabase{
    constructor(supabaseUrl, supabaseKey) {
        super(supabaseUrl, supabaseKey);
    }

    async select_all() {
        const { data, error } = await this.supabase
            .from('skills-backend')
            .select('category, title, value, comment');
        
        return { 
            data: {
                language: data.filter((i)=> i?.category === true),
                library: data.filter((i)=> i?.category === false)
            },
            error: error
        };
    };

    async upsert(new_data) {
        // supabaseへのクエリデータを整形
        const query_data = [...new_data.language, ...new_data.library]
            .map((column, index)=>{ return {id: index+1, ...column}});

        // すべてのデータを削除し、新しいデータを挿入
        const { delete_error } = await this.supabase
            .from('skills-backend')
            .delete()
            .neq("id", 0)
        
        if (delete_error) {
            return { message: null, error: delete_error };
        } else {
            const { insert_error } = await this.supabase
                .from('skills-backend')
                .insert(query_data);

            if (insert_error) {
                return { message: null, error: insert_error };
            } else {
                return { message: "バックエンドのデータを更新しました。", error: null};
            }
        }
    };
}
