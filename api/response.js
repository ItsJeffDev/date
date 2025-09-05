export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, response, timestamp } = req.body;

    try {
      const sheetRes = await fetch("Tu2LnnOpc#v_lxytnv14_U7Igf@N7AfhQCCw_4POwQNJ0Lv0kNZWS7M#_OC!Q_V5", {
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
