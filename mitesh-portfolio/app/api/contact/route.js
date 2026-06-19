const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "uniyalmitesh812@gmail.com";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are all required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email address doesn't look valid." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  // No email provider configured yet — log the submission server-side so it's
  // not lost, and let the visitor know it went through. Set RESEND_API_KEY in
  // .env.local (see README) to actually deliver these to your inbox.
  if (!apiKey) {
    console.log("New contact form submission (RESEND_API_KEY not set):", {
      name,
      email,
      message,
      receivedAt: new Date().toISOString(),
    });
    return Response.json({
      message: "Message received — I'll get back to you soon.",
    });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact Form <onboarding@resend.dev>",
        to: TO_EMAIL,
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", errText);
      return Response.json(
        { error: "Couldn't send your message right now. Please email me directly instead." },
        { status: 502 }
      );
    }

    return Response.json({ message: "Message sent — I'll get back to you soon." });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json(
      { error: "Couldn't send your message right now. Please email me directly instead." },
      { status: 500 }
    );
  }
}
