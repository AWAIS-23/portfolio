import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "muhammadawais65u@gmail.com",
        pass: "uvoc vjao mcyp qdwy",
      },
    });

    const toAddress = "muhammadawais65u@gmail.com";

    const info = await transporter.sendMail({
      from: `${name} `,
      to: toAddress,
      subject,
      replyTo: email,
      text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br/>")}</p>`,
    });
    return res.status(200).json({ ok: true, messageId: info?.messageId || null });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
