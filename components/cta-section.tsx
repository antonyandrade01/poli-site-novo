"use client"

import { MessageCircle, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const WHATSAPP_LINK =
  "https://wa.me/556692597047?text=Ol%C3%A1%20Poliana%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-xl md:px-16">
            {/* Decorative circle */}
            <div
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-secondary/20"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                Pronta para dar o proximo passo?
              </h3>
              <p className="mx-auto mb-8 max-w-xl text-primary-foreground/90 leading-relaxed">
                Agende uma avaliacao e descubra como a fonoaudiologia pode
                transformar o desenvolvimento do seu filho. Estou aqui para
                ajudar!
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-whatsapp px-8 py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="tel:+556692597047"
                  className="flex items-center gap-3 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 font-bold text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  (66) 9259-7047
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
