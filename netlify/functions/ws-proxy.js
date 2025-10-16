import WebSocket from "ws";

export default async (req, res) => {
  const apiKey = process.env.EODHD_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Missing EODHD_API_KEY" }));
    return;
  }
  const url = `wss://ws.eodhd.com/ws/crypto?api_token=${apiKey}`;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ url }));
};