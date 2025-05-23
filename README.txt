# M & M A.I. PLATFORM – Deployment Instructions

This guide explains how to deploy the full M & M Platform (real Solana sniping + BTC payout) using the provided files.

---

## 🔧 Files You Will Receive

1. `index.html` - The full frontend interface (connects to your backend)
2. `mm-backend.zip` - Backend code (Node.js + Express) with:
   - Real Jupiter API logic
   - Real SOL compounding and trade routing
   - Blockonomics BTC payout wiring
3. `vercel.json` - Routing config for Vercel
4. `package.json` - Backend dependencies
5. `README.txt` - This file

---

## 🚀 Backend Deployment (Vercel)

### Option A: Using Vercel Dashboard

1. Unzip `mm-backend.zip`
2. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
3. Click **“Add New” → “Project” → “Import Project”**
4. Choose “Upload” and upload the contents of `mm-backend/` folder
5. Wait ~1 min — Vercel will provide your backend URL (e.g. `https://m-m.vercel.app`)

---

## 🌐 Frontend Deployment (IPFS)

1. Visit [https://web3.storage](https://web3.storage) or [https://pinata.cloud](https://pinata.cloud)
2. Upload `index.html`
3. Publish the IPFS link to your audience

---

## 🛠 Requirements Already Wired In

- Solana RPC: QuickNode
- Wallet: Phantom
- Trade API: Jupiter Aggregator
- BTC Payout: Blockonomics (API Key hardcoded)
- Fee Split: 10% to each of your two BTC addresses
- Minimum Start: $50 SOL
- Real profit accumulation and compounding every 4 hours
- Withdrawal route active and ready

---

## 💬 When You Reopen This Project

If memory is lost, re-upload `M-M-Instructions.txt` and say:
“Resume M & M platform from these instructions.”

You'll get instant continuity.

---

You're now ready to launch the real version of the M & M A.I. Sniper Platform.