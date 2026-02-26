"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_LINK =
  "https://wa.me/556692597047?text=Ol%C3%A1%20Poliana%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento."

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  )
}
