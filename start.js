import { setState } from './status';

export default function handler(req, res) {
  setState(true, 0, Date.now());
  res.status(200).json({ message: "Sniping started." });
}
