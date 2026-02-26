"use client"

import { Star, Quote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const TESTIMONIALS = [
  {
    name: "Camila R.",
    role: "Mae do Bernardo, 4 anos",
    text: "A Poliana transformou a vida do meu filho. Ele mal falava e hoje se comunica super bem. Profissional incrivel, acolhedora e competente!",
    stars: 5,
  },
  {
    name: "Fernanda S.",
    role: "Mae da Sofia, 3 anos",
    text: "Atendimento humanizado de verdade. A Poliana envolve toda a familia no processo e os resultados aparecem rapido. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Juliana M.",
    role: "Mae do Lucas, 5 anos",
    text: "Depois do diagnostico de TEA, ficamos perdidos. A Poliana nos acolheu e deu todo o suporte necessario. Meu filho evoluiu muito!",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            Depoimentos
          </span>
          <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            O que dizem as familias
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A confianca das familias e o maior reconhecimento do nosso trabalho.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 120}>
              <div className="relative flex h-full flex-col rounded-2xl border border-secondary/60 bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-secondary/60"
                  aria-hidden="true"
                />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="sr-only">{t.stars} de 5 estrelas</span>
                </div>
                <p className="mb-6 flex-1 text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
