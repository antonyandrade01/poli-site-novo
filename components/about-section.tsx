"use client"

import { GraduationCap, Heart, Award, Users } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Formacao Solida",
    description: "Graduada em Fonoaudiologia com especializacao em linguagem infantil e TEA.",
  },
  {
    icon: Award,
    title: "Experiencia Clinica",
    description: "Anos de experiencia acompanhando o desenvolvimento de criancas com dedicacao.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada crianca e unica. Terapias personalizadas com empatia e acolhimento.",
  },
  {
    icon: Users,
    title: "Familia no Centro",
    description: "Pais e cuidadores sao parte ativa do processo terapeutico e das conquistas.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="flex-1">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
                Sobre Mim
              </span>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h3 className="mb-6 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Ola, eu sou a Poliana Licursi!
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou fonoaudiologa apaixonada pelo desenvolvimento infantil. Minha
                  missao e ajudar cada crianca a alcancar seu pleno potencial
                  comunicativo, respeitando seu ritmo e suas particularidades.
                </p>
                <p>
                  Com formacao especializada em linguagem infantil e Transtorno do
                  Espectro Autista (TEA), atuo com uma abordagem baseada em
                  evidencias cientificas e muito afeto. Acredito que a parceria com
                  a familia e essencial para resultados reais e duradouros.
                </p>
                <p>
                  Atendo em consultorio e tambem em domicilio na regiao de
                  Primavera do Leste - MT, levando praticidade e conforto para as
                  familias que acompanho.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 100 + 100}>
                  <div className="rounded-2xl border border-secondary/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h4 className="mb-1.5 font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
