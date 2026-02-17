import { NextResponse } from "next/server";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";
import db from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { sendMail } from "@/lib/mailer";
import { sendLeadToAdmin, sendCustomerConfirmation } from "@/lib/whatsapp";
import config from "@/lib/config";
import { logger } from "@/lib/logger";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  const allowed = rateLimit(ip, config.contactRateLimit);

  if (!allowed) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();

  const schema = z.object({
    name: z.string().min(2),
    phone: z.string().min(10),
    email: z.string().optional(),
    service: z.string().optional(),
    message: z.string().optional(),
    token: z.string(),
  });

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const recaptchaValid = await verifyRecaptcha(parsed.data.token);

  if (!recaptchaValid) {
    return NextResponse.json(
      { error: "Bot verification failed" },
      { status: 400 },
    );
  }

  const cleanData = {
    name: sanitizeHtml(parsed.data.name),
    phone: sanitizeHtml(parsed.data.phone),
    email: sanitizeHtml(parsed.data.email || ""),
    service: sanitizeHtml(parsed.data.service || ""),
    message: sanitizeHtml(parsed.data.message || ""),
  };

  db.prepare(
    `INSERT INTO leads (name, phone, email, service, message)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    cleanData.name,
    cleanData.phone,
    cleanData.email,
    cleanData.service,
    cleanData.message,
  );

  try {
    await sendMail(cleanData);
    // 🔥 WhatsApp Integration
    await sendLeadToAdmin(cleanData);
    await sendCustomerConfirmation(cleanData);
  } catch (error) {
    logger.error("Email failed:", error);
  }

  return NextResponse.json({ success: true });
}
