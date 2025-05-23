import { setState } from './status';

export default function handler(req, res) {
  setState(false, 0, null);
  res.status(200).json({ message: "Sniping stopped." });
}
