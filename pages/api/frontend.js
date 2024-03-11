import Frontend from "/src/models/Frontend.js";

export default async function frontend(req, res) {
    // get frontend
    if (req.method=="GET"){
        const response = await new Frontend(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).select_all();

        if (response.error){
            res.status(500).json(response.error);
        } else{
            res.status(200).json(response.data);
        }

    // post frontend
    } else if (req.method=="POST") {
        const response = await new Frontend(
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