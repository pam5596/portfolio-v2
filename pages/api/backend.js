import Backend from "/src/models/Backend.js";

export default async function get_backend(req, res) {
    // get backend
    if (req.method=="GET"){
        const response = await new Backend(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).select_all();

        if (response.error){
            res.status(500).json(response.error);
        } else{
            res.status(200).json(response.data);
        }

    // post backend
    } else if (req.method=="POST") {
        const response = await new Backend(
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