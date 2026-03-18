"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/917014337079?text=Hi%20I%20want%20to%20book%20a%20service"

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
