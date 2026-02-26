"use client"

import Image from "next/image"
import { MessageCircle, Instagram, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const WHATSAPP_LINK =
  "https://wa.me/556692597047?text=Ol%C3%A1%20Poliana%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 lg:flex-row lg:py-24">
      {/* Text */}
      <div className="flex-1 text-center lg:text-left">
        <AnimatedSection>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Primavera do Leste - MT
          </span>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl lg:text-6xl">
            Ajudando seu filho a{" "}
            <span className="text-accent">Brilhar!</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Fonoaudiologia especializada com atendimento humanizado. Foco no
            desenvolvimento infantil, intervencao precoce e qualidade de vida da
            sua familia.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-whatsapp px-8 py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar Avaliacao
            </a>
            <a
              href="https://instagram.com/fonopolianalicursi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-primary bg-card px-8 py-4 font-bold text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Photo */}
      <AnimatedSection className="flex flex-1 justify-center" delay={150}>
        <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-card bg-gradient-to-tr from-secondary to-accent p-1.5 shadow-2xl md:h-96 md:w-96">
          <Image
            src="/images/foto-poliana.jpg"
            alt="Fonoaudiologa Poliana Licursi"
            fill
            className="rounded-full object-cover"
            priority
            sizes="(max-width: 768px) 288px, 384px"
          />
        </div>
      </AnimatedSection>
    </section>
  )
}
