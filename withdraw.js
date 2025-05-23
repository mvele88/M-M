export default function handler(req, res) {
  const total = 100; // Simulated
  const userShare = total * 0.8;
  const btcSplit = total * 0.1;

  res.status(200).json({
    status: "Withdrawal simulated",
    sentToUser: userShare.toFixed(2),
    btc: [
      { address: "bc1q9k79mkx82h8e8awvda5slgw9sku0lyrf5mlaek", amount: btcSplit.toFixed(2) },
      { address: "bc1ql37nntg829w2vyufpheg9wxdutl8m4zjvjudt2", amount: btcSplit.toFixed(2) }
    ]
  });
}
