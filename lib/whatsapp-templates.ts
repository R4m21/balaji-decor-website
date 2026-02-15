// lib/whatsapp-templates.ts

export const buildAdminLeadMessage = (data: {
  name: string;
  phone: string;
  service: string;
  message: string;
}) => {
  return `
New Website Lead – Balaji Decor

Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message}
  `.trim();
};

export const buildCustomerConfirmation = (name: string) => {
  return `Hi ${name}, thank you for contacting Balaji Decor. Our team will call you shortly.`;
};
