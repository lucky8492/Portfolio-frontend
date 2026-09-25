import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch(
      "https://luckymishra.goatcounter.com/counter/TOTAL.json"
    );

    const data = await response.json();

    res.status(200).json({
      count: data.count ?? 0,
    });
  } catch (err) {
    res.status(200).json({ count: 0 });
  }
}