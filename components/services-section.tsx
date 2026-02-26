"use client"

import { Puzzle, MessageSquare, Ear, Smile, Home } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const SERVICES = [
  {
    icon: Puzzle,
    title: "TEA (Autismo)",
    description:
      "Intervencao precoce, estimulo a comunicacao e acompanhamento especializado para criancas atipicas.",
    color: "bg-accent",
  },
  {
    icon: MessageSquare,
    title: "Fala e Linguagem",
    description:
      "Tratamento para atrasos no desenvolvimento da fala, trocas na fala (foneticas/fonologicas) e gagueira.",
    color: "bg-primary",
  },
  {
    icon: Ear,
    title: "Processamento Auditivo",
    description:
      "Avaliacao e reabilitacao das habilidades auditivas cruciais para a aprendizagem e atencao escolar.",
    color: "bg-accent",
  },
  {
    icon: Smile,
    title: "Motricidade Oral",
    description:
      "Adequacao das funcoes de respiracao, mastigacao e degluticao, incluindo teste da linguinha.",
    color: "bg-primary",
  },
  {
    icon: Home,
    title: "Atendimento Domiciliar",
    description:
      "Terapia no conforto do lar da crianca, favorecendo a adaptacao e a participacao ativa da familia no processo.",
    color: "bg-accent",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Areas de Atuacao
          </h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Terapia fonoaudiologica baseada em evidencias cientificas e muito
            carinho para o desenvolvimento pleno da crianca.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-secondary/60 bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-lg ${service.color} text-primary-foreground shadow-md`}
                >
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h4>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
