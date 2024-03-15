import axios from 'axios'

export default async function writing(req, res) {
    if (req.method=="GET"){
        axios.get(process.env.QIITA_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${process.env.QIITA_API_TOKEN}`,
                "Content-Type": "application/json",
            }})
            .then((response) => {
                res.status(200).json(response.data)
            })
            .catch((error) => {
                res.status(500).json(error)
            })

    } else if (req.method=="POST"){
        res.status(405).json()
    }
};