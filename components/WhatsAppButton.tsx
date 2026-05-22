"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919524409037"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 transition text-white p-4 rounded-full shadow-2xl"
    >

      <MessageCircle className="w-7 h-7" />

    </a>
  );
}