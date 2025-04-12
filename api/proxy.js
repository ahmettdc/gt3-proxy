const axios = require('axios');

export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    res.status(400).json({ error: 'URL parametresi eksik.' });
    return;
  }

  try {
    const response = await axios.get(targetUrl);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Veri çekilemedi.' });
  }
}
