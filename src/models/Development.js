import Supabase from "/src/models/Supabase.js";

export default class Development extends Supabase {
    constructor(supabaseUrl, supabaseKey) {
        super(supabaseUrl, supabaseKey);
    }

    async select_all() {
        const { data, error } = await this.supabase
            .from('works-development')
            .select();
        
        return { 
            data: {
                development: data
            }, 
            error: error
        };
    };

    async upload_to_storage(filename, file) {
        const { data, error } = await this.supabase.storage
            .from("works-development")
            .upload(filename, file,
                { upsert: true }
            );
        if (error) {
            return error;
        } else {
            return { src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`};
        }
    }

    async upsert(new_data) {
        const query_data = new_data.development
            .map((column, index)=>{ return {id: index+1, ...column}});

        // すべてのデータを削除し、新しいデータを挿入
        const { delete_error } = await this.supabase
            .from('works-development')
            .delete()
            .neq("id", -1)
        
        if (delete_error) {
            return { message: null, error: delete_error };
        } else {
            const { insert_error } = await this.supabase
                .from('works-development')
                .insert(query_data);

            if (insert_error) {
                return { message: null, error: insert_error };
            } else {
                return { message: "Developmentのデータを更新しました。", error: null};
            }
        }
    };
}