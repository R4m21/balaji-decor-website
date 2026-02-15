import { z } from "zod";

const serverSchema = z.object({
  // WhatsApp
  WHATSAPP_TOKEN: z.string().min(1),
  WHATSAPP_PHONE_NUMBER_ID: z.string().min(1),
  WHATSAPP_WEBHOOK_VERIFY_TOKEN: z.string().min(1),
  ADMIN_WHATSAPP_NUMBER: z.string().min(10),

  // Mail (optional for now)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  ADMIN_EMAIL: z.string().email().optional(),

  // Security
  RECAPTCHA_SECRET_KEY: z.string().min(1),
  CONTACT_RATE_LIMIT: z.string().default("5"),
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

const clientEnv = clientSchema.parse(process.env);

export const env = {
  ...serverEnv,
  ...clientEnv,
};
