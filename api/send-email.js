export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const { name, email, phone, subject, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Medigard Audit <audit@medigard.io>',
        to: ['support@medigard.io'],
        reply_to: email,
        subject: subject || `Audit Report — ${name}`,
        text: message,
      }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      console.error('Resend error:', data);
      return res.status(502).json({ error: 'Email delivery failed', detail: data });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('send-email handler error:', err);
    return res.status(500).json({ error: err.message });
  }
}
