export const handler = async (event, context) => {
  try {
    const apiKey = process.env.EODHD_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing EODHD_API_KEY" }),
      };
    }

    const url = `wss://ws.eodhd.com/ws/crypto?api_token=${apiKey}`;
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
