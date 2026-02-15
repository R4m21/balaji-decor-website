"use client";

import config from "@/lib/config";

const adminWhatsAppNumber = config.adminWhatsAppNumber;

export default function FloatingButtons() {
  return (
    <>
      <a
        href={`tel:+${adminWhatsAppNumber}`}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-3 text-white shadow-lg"
      >
        Call
      </a>

      <a
        href={`https://wa.me/${adminWhatsAppNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 z-50 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg"
      >
        WhatsApp
      </a>
    </>
  );
}
