import { z } from "zod";

const serverSchema = z.object({
  // WhatsApp
  WHATSAPP_TOKEN: z.string().optional(),
  WHATSAPP_PHONE_NUMBER_ID: z.string().optional(),
  WHATSAPP_WEBHOOK_VERIFY_TOKEN: z.string().optional(),
  ADMIN_WHATSAPP_NUMBER: z.string().min(10),

  // Mail (optional)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  ADMIN_EMAIL: z.string().email().optional(),

  // Security
  RECAPTCHA_SECRET_KEY: z.string().min(1),
  CONTACT_RATE_LIMIT: z.string().default("5"),

  // New for Logger
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER: z.string().min(10),
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
});

const isServer = typeof window === "undefined";

const serverEnv = isServer
  ? serverSchema.parse(process.env)
  : ({} as z.infer<typeof serverSchema>);

const clientEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER:
    process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
};

const validatedClientEnv = clientSchema.parse(clientEnv);

export const env = {
  ...serverEnv,
  ...validatedClientEnv,
};
