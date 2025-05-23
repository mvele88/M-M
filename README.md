# M & M A.I. PLATFORM — Vercel Backend (API Functions)

This backend is designed to run on Vercel using its native `api/` function structure.
It supports real-time endpoints for profit tracking, sniping control, and BTC withdrawal logic.

---

## ✅ Folder Structure

```
/api/
├── status.js     → GET current state and profit
├── start.js      → POST to start sniping session
├── stop.js       → POST to stop sniping session
├── withdraw.js   → POST to simulate BTC/sol withdrawal
```

---

## 🔧 Setup Instructions (via GitHub)

1. Create a GitHub repo (or use your existing one)
2. Add an `/api/` folder
3. Inside it, add the 4 files:
   - `status.js`
   - `start.js`
   - `stop.js`
   - `withdraw.js`
4. Commit and push to GitHub

---

## 🚀 Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Click **“Add New Project”**
3. Import your GitHub repo
4. Select **Framework Preset**: `Other`
5. Click **Deploy**

---

## 🧪 Test Your Endpoints

Once live, test:

```
GET     /api/status
POST    /api/start
POST    /api/stop
POST    /api/withdraw
```

You will get JSON like:

```json
{ "running": false, "profitUSD": "0.00", "uptimeHours": 0 }
```

---

## 📌 Notes

- No Express required — each file is a function
- No `vercel.json` needed
- Deploys instantly with correct routing
- BTC address logic is already embedded in `withdraw.js`

---

For best results, connect this to your `index.html` frontend after verifying all endpoints are live.