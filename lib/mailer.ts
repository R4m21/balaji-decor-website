import nodemailer from "nodemailer";

export async function sendMail({ name, phone, email, service, message }: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Admin Email
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
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
      from: process.env.SMTP_USER,
      to: email,
      subject: "We Received Your Inquiry – Balaji Decor",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Balaji Decor. Our team will call you shortly.</p>
      `,
    });
  }
}
