# WS Monitor

📡 Real-time crypto price monitor using EODHD WebSocket API  
🔒 API key hidden via Netlify Function Proxy  

## 🚀 Deploy to Netlify

1. Push this folder to GitHub
2. Go to https://app.netlify.com/start → **Import from Git**
3. Choose this repo and deploy
4. In **Site Settings → Environment Variables** add:
   ```
   Key: EODHD_API_KEY
   Value: your_real_api_key
   ```
5. Redeploy the site
6. Open the URL Netlify gives you → enter a symbol (e.g. BTC-USD) → click **Connect**

## 🧠 How it works

- `index.html` — static dashboard  
- `netlify/functions/ws-proxy.js` — small serverless function  
  Returns the full WebSocket URL with your API key stored safely in Netlify env vars  
