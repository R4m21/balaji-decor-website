import { env } from "./env";

const config = {
  // Public
  siteUrl: env.NEXT_PUBLIC_SITE_URL || "https://balajidecoriniteriors.com",
  adminWhatsAppNumber: env.NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER || "918828282621",
  recaptchaSiteKey: env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  gaId: env.NEXT_PUBLIC_GA_ID,

  // Server Only
  whatsappToken: env.WHATSAPP_TOKEN,
  phoneNumberId: env.WHATSAPP_PHONE_NUMBER_ID,
  webhookVerifyToken: env.WHATSAPP_WEBHOOK_VERIFY_TOKEN,
  recaptchaSecret: env.RECAPTCHA_SECRET_KEY,
  contactRateLimit: Number(env.CONTACT_RATE_LIMIT) || 5,

  smtp: {
    host: env.SMTP_HOST,
    port: env.SMTP_PORT ? Number(env.SMTP_PORT) : undefined,
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },

  adminEmail: env.ADMIN_EMAIL || "balajidecor108@gmail.com",

  // Logger & environment
  isProduction: process.env.NODE_ENV === "production",
};

export default config;
