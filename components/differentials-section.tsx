"use client"

import {
  Sparkles,
  Clock,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const DIFFERENTIALS = [
  {
    icon: HeartHandshake,
    title: "Atendimento Acolhedor",
    description:
      "Ambiente ludico e acolhedor que faz a crianca se sentir segura e feliz durante as sessoes.",
  },
  {
    icon: BookOpen,
    title: "Baseado em Evidencias",
    description:
      "Utilizacao de metodos e tecnicas validados cientificamente para garantir resultados eficazes.",
  },
  {
    icon: Clock,
    title: "Horarios Flexiveis",
    description:
      "Atendimento em horarios adaptados a rotina da familia, incluindo opcao domiciliar.",
  },
  {
    icon: Sparkles,
    title: "Terapia Personalizada",
    description:
      "Cada plano terapeutico e unico, criado especialmente para as necessidades de cada crianca.",
  },
  {
    icon: ShieldCheck,
    title: "Parceria com a Familia",
    description:
      "Orientacao constante para pais e cuidadores, fortalecendo o trabalho feito em casa.",
  },
  {
    icon: Lightbulb,
    title: "Atualizacao Constante",
    description:
      "Formacao continuada e participacao em congressos para oferecer o que ha de mais atual.",
  },
]

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="border-t border-border bg-card py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            Diferenciais
          </span>
          <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Por que escolher a Poliana?
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Compromisso, dedicacao e paixao pelo desenvolvimento de cada crianca.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 80}>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="mb-1.5 font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
