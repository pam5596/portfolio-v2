import Devops from "/src/models/Devops.js";

export default async function devops(req, res) {
    // get devops
    if (req.method=="GET"){
        const response = await new Devops(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).select_all();

        if (response.error){
            res.status(500).json(response.error);
        } else{
            res.status(200).json(response.data);
        }

    // post devops
    } else if (req.method=="POST") {
        const response = await new Devops(
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