export default function test(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ text: 'GET method is OK' })
    } else if (req.method === 'POST') {
        res.status(200).json({ text: 'POST method is OK' })
    }
}