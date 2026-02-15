// lib/whatsapp.ts

import {
  buildAdminLeadMessage,
  buildCustomerConfirmation,
} from "./whatsapp-templates";

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN!;
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID!;
const ADMIN_PHONE = process.env.ADMIN_WHATSAPP_NUMBER!;

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
      to,
      type: "text",
      text: { body },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`WhatsApp API Error: ${error}`);
  }

  return response.json();
}

export async function sendLeadToAdmin(data: LeadPayload) {
  const message = buildAdminLeadMessage(data);
  return sendWhatsAppMessage(ADMIN_PHONE, message);
}

export async function sendCustomerConfirmation(data: LeadPayload) {
  const message = buildCustomerConfirmation(data.name);
  return sendWhatsAppMessage(data.phone, message);
}
