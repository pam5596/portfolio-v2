import { createClient } from "@supabase/supabase-js";

export default class Supabase{
    constructor(supabaseUrl, supabaseKey) {
        this.supabase = createClient(supabaseUrl, supabaseKey);
    };

    async test_connection() {
        const { _, error } = await this.supabase
            .from('skills-frontend')
            .select();
        
        if (error) {
            return { data: false, error: error };
        } else {
            return { data: true , error: null };
        }
    };
}