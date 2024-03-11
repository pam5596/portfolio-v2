import Database from "/src/models/Database.js";

export default async function get_database(req, res) {
    // get database
    if (req.method=="GET"){
        const response = await new Database(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).select_all();

        if (response.error){
            res.status(500).json(response.error);
        } else{
            res.status(200).json(response.data);
        }

    // post database
    } else if (req.method=="POST") {
        const response = await new Database(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).upsert(req.body);

        if (response.error) {
            res.status(500).json(response.error);
        } else {
            res.status(200).json(response.message);
        }
    }
};