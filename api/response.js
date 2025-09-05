export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, response, timestamp } = req.body;

    try {
      const sheetRes = await fetch("https://api.sheetbest.com/sheets/125957af-e25c-4e34-8ddf-05d5856687db", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Response: response,
          Timestamp: timestamp,
        }),
      });

      if (sheetRes.ok) {
        res.status(200).json({ message: "Saved to sheet!" });
      } else {
        res.status(500).json({ error: "Failed to save to sheet." });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
