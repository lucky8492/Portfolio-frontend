




export default async function handler(_req: unknown, res: any) {
  try {
    const response = await fetch(
      "https://luckymishra.goatcounter.com/counter/TOTAL.json"
    );

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ count: data.count });
  } catch {
    res.status(500).json({ count: 0 });
  }
}