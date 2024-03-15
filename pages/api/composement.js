import Composement from "/src/models/Composement";

export default async function composement(req, res){
    if (req.method == 'GET') {
        const response = await new Composement(
            process.env.YOUTUBE_API_KEY,
            process.env.YOUTUBE_LIST_ID,
            process.env.SUPABASE_URL,
            process.env.SUPABASE_KEY
        ).select_all();

        return res.status(200).json(response.data);

    } else if (req.method == 'POST') {
        return res.status(405).json();
    }
};