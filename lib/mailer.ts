import nodemailer from "nodemailer";
import config from "@/lib/config";

export async function sendMail({ name, phone, email, service, message }: any) {
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: Number(config.smtp.port),
    // secure: true, // use must be on
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  // Admin Email
  await transporter.sendMail({
    from: config.smtp.user,
    to: config.adminEmail,
    subject: "New Lead – Balaji Decor",
    html: `
      <h3>New Contact Lead</h3>
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Service: ${service}</p>
      <p>Message: ${message}</p>
    `,
  });

  // Auto Reply
  if (email) {
    await transporter.sendMail({
      from: config.smtp.user,
      to: email,
      subject: "We Received Your Inquiry – Balaji Decor",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Balaji Decor. Our team will call you shortly.</p>
      `,
    });
  }
}
