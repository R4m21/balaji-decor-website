import { z } from "zod";
import { logger } from "@/lib/logger";

const isServer = typeof window === "undefined";
const isProd = process.env.NODE_ENV === "production";

/* =========================
   SERVER ENV
========================= */

const serverSchema = z.object({
  // WhatsApp
  WHATSAPP_TOKEN: isProd ? z.string().min(1) : z.string().optional(),
  WHATSAPP_PHONE_NUMBER_ID: isProd ? z.string().min(1) : z.string().optional(),
  WHATSAPP_WEBHOOK_VERIFY_TOKEN: isProd
    ? z.string().min(1)
    : z.string().optional(),
  ADMIN_WHATSAPP_NUMBER: z.string().min(10),

  // Mail (optional)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  ADMIN_EMAIL: z.string().email().optional(),

  // Security
  RECAPTCHA_SECRET_KEY: isProd ? z.string().min(1) : z.string().optional(),
  CONTACT_RATE_LIMIT: z.string().default("5"),

  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

/* =========================
   CLIENT ENV
========================= */

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER: z.string().min(10),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

/* =========================
   VALIDATION
========================= */

let serverEnv = {} as z.infer<typeof serverSchema>;

if (isServer) {
  const parsed = serverSchema.safeParse(process.env);

  if (!parsed.success) {
    if (isProd) {
      logger.error("Invalid production server environment variables", {
        errors: parsed.error.flatten().fieldErrors,
      });
      process.exit(1);
    } else {
      logger.warn("Server env validation warning (dev mode)", {
        errors: parsed.error.flatten().fieldErrors,
      });
    }
  } else {
    serverEnv = parsed.data;
  }
}

const clientEnvRaw = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER:
    process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
};

const clientParsed = clientSchema.safeParse(clientEnvRaw);

if (!clientParsed.success) {
  if (isProd) {
    logger.error("Invalid production client environment variables", {
      errors: clientParsed.error.flatten().fieldErrors,
    });
    process.exit(1);
  } else {
    logger.warn("Client env validation warning (dev mode)", {
      errors: clientParsed.error.flatten().fieldErrors,
    });
  }
}

export const env = {
  ...serverEnv,
  ...(clientParsed.success ? clientParsed.data : {}),
};
