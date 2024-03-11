import Supabase from "/src/models/Supabase.js";

/**
    ## Skills - Database model
    
    skills - databaseに関するデータを扱うモデル

    ### functions
    - `select_dall` - databaseのデータを取得する
    - `upsert` - databaseのデータを更新する（一括削除->一括挿入）
**/

export default class Database extends Supabase {
    constructor(supabaseUrl, supabaseKey) {
        super(supabaseUrl, supabaseKey);
    }

    async select_all() {
        const { data, error } = await this.supabase
            .from('skills-database')
            .select('category, title, value, comment');
        
        return { 
            data: {
                system: data.filter((i)=> i?.category === true),
                orm: data.filter((i)=> i?.category === false)
            },
            error: error
        };
    };

    async upsert(new_data) {
        // supabaseへのクエリデータを整形
        const query_data = [...new_data.system, ...new_data.orm]
            .map((column, index)=>{ return {id: index+1, ...column}});

        // すべてのデータを削除し、新しいデータを挿入
        const { delete_error } = await this.supabase
            .from('skills-database')
            .delete()
            .neq("id", 0)
        
        if (delete_error) {
            return { message: null, error: delete_error };
        } else {
            const { insert_error } = await this.supabase
                .from('skills-database')
                .insert(query_data);

            if (insert_error) {
                return { message: null, error: insert_error };
            } else {
                return { message: "データベースのデータを更新しました。", error: null};
            }
        }
    };
}