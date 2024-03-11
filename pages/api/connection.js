import Supabase from "/src/models/Supabase.js"

export default async function connection(req, res) {
    if (req.method == "GET") {
        const response = new Supabase(
            process.env.SUPABASE_URL, 
            process.env.SUPABASE_KEY
        ).test_connection();

        if (response.error) {
            res.status(500).json(response.error);
        } else {
            res.status(200).json(true);
        }
    } else {
        res.status(405).json();
    }
};