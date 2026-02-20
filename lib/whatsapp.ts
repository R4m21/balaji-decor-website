import { logger } from "./logger";
import {
  buildAdminLeadMessage,
  buildCustomerConfirmation,
} from "./whatsapp-templates";
import config from "@/lib/config";

const WHATSAPP_TOKEN = config.whatsappToken!;
const PHONE_NUMBER_ID = config.phoneNumberId!;
const ADMIN_PHONE = config.adminWhatsAppNumber!;

const BASE_URL = `https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`;

type LeadPayload = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

async function sendWhatsAppMessage(to: string, body: string) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: `91${to}`,
      // type: "text",
      // text: { body },
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`WhatsApp API Error: ${error}`);
  }

  return response.json();
}

export async function sendLeadToAdmin(data: LeadPayload) {
  try {
    const message = buildAdminLeadMessage(data);
    if (!WHATSAPP_TOKEN || !PHONE_NUMBER_ID) return;
    return sendWhatsAppMessage(ADMIN_PHONE, message);
  } catch (err) {
    logger.error("WhatsApp failed:", err);
  }
}

export async function sendCustomerConfirmation(data: LeadPayload) {
  try {
    const message = buildCustomerConfirmation(data.name);
    if (!WHATSAPP_TOKEN || !PHONE_NUMBER_ID) return;
    return sendWhatsAppMessage(data.phone, message);
  } catch (err) {
    logger.error("WhatsApp failed:", err);
  }
}
