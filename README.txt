# M & M A.I. PLATFORM – Deployment Instructions

This guide explains how to deploy the full M & M Platform (real Solana sniping + BTC payout) using the provided files.

---

## 🔧 Files You Should Have

1. `index.html` - The full frontend interface (connects to your backend)
2. `mm-backend/` - Folder with backend files:
   - index.js (backend routes and logic)
   - package.json (dependencies)
   - vercel.json (Vercel routing config)

---

## 🚀 Backend Deployment (Vercel)

### Option A: Using Vercel Dashboard

1. Zip the contents of your `mm-backend/` folder.
2. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
3. Click **“Add New” → “Project” → “Import Project”**
4. Choose “Upload” and upload your ZIP
5. Wait ~1 min — Vercel will provide your backend URL (e.g. `https://m-m.vercel.app`)

---

## 🌐 Frontend Deployment (IPFS or other)

1. Visit [https://web3.storage](https://web3.storage) or [https://pinata.cloud](https://pinata.cloud)
2. Upload `index.html`
3. Share the IPFS link with your users

---

## ✅ Platform Features

- Solana RPC: QuickNode
- Wallet: Phantom
- Trade API: Jupiter Aggregator
- BTC Payout: Blockonomics (API Key: ANQNe3g1d0oqFLOnJZCbsCC1sq7Aj7Te0bl4CJvlVTg)
- Fee Split: 10% each to:
   - bc1q9k79mkx82h8e8awvda5slgw9sku0lyrf5mlaek
   - bc1ql37nntg829w2vyufpheg9wxdutl8m4zjvjudt2
- Minimum SOL to start: $50
- Real-time profit compounding and sniping logic
- Backend handles all execution
- Frontend displays wallet, profit, and controls

---

## 🧠 To Resume Later

If memory is lost, upload `M-M-Instructions.txt` and say:
“Resume M & M platform from these instructions.”

---

You're now ready to launch the real M & M A.I. Sniper Platform.