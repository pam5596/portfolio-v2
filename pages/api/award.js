import Award from "/src/models/Award.js";

export default async function award(req, res) {
    // get award
    if (req.method=="GET"){
        const response = await new Award(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).select_all();

        if (response.error){
            res.status(500).json(response.error);
        } else{
            res.status(200).json(response.data);
        }

    // post award
    } else if (req.method=="POST") {
        const response = await new Award(
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