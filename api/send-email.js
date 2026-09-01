export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const { name, email, phone, subject, message, sendCopy } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const from = "Medigard <audit@comms.medigard.io>";
  const notifyTo = process.env.NOTIFY_EMAIL || "support@medigard.io";
  const emailSubject = subject || `Results — ${name}`;

  try {
    const notify = await sendResend(apiKey, {
      from,
      to: [notifyTo],
      reply_to: email,
      subject: emailSubject,
      text: message,
    });

    if (!notify.ok) {
      console.error("Resend notify error:", notify.data);
      return res
        .status(502)
        .json({ error: "Email delivery failed", detail: notify.data });
    }

    if (sendCopy && email !== notifyTo) {
      const copy = await sendResend(apiKey, {
        from,
        to: [email],
        subject: emailSubject,
        text: message,
      });
      if (!copy.ok) {
        console.warn("Resend copy-to-lead error:", copy.data);
      }
    }

    return res.status(200).json({ success: true, id: notify.data.id });
  } catch (err) {
    console.error("send-email handler error:", err);
    return res.status(500).json({ error: err.message });
  }
}

async function sendResend(apiKey, payload) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await resp.json();
  return { ok: resp.ok, data };
}
