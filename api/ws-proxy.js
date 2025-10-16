export default async function handler(req, res) {
  try {
    const apiKey = process.env.EODHD_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing EODHD_API_KEY" });
    }

    const url = `wss://ws.eodhd.com/ws/crypto?api_token=${apiKey}`;
    return res.status(200).json({ url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
