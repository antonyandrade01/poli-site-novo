"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"

const FAQ_ITEMS = [
  {
    question: "A partir de que idade posso levar meu filho ao fonoaudiologo?",
    answer:
      "A avaliacao fonoaudiologica pode ser feita desde os primeiros meses de vida. Quanto mais cedo identificarmos qualquer alteracao, melhores serao os resultados da intervencao. Nao e preciso esperar para buscar ajuda!",
  },
  {
    question: "Como funciona o atendimento domiciliar?",
    answer:
      "No atendimento domiciliar, vou ate a residencia da familia com todos os materiais necessarios para a sessao. Isso facilita a rotina e permite que a crianca se sinta mais confortavel no ambiente dela.",
  },
  {
    question: "Quantas sessoes sao necessarias?",
    answer:
      "A quantidade de sessoes varia conforme o caso e a evolucao de cada crianca. Apos a avaliacao inicial, traco um plano terapeutico individualizado e mantenho a familia informada sobre o progresso.",
  },
  {
    question: "A fonoaudiologia ajuda criancas com autismo (TEA)?",
    answer:
      "Sim! A fonoaudiologia e fundamental para criancas com TEA, trabalhando comunicacao, linguagem, interacao social e habilidades alimentares. A intervencao precoce faz toda a diferenca.",
  },
  {
    question: "O que e o teste da linguinha?",
    answer:
      "E uma avaliacao simples feita em recem-nascidos para verificar se o frenulo lingual (a pelezinha embaixo da lingua) pode limitar os movimentos da lingua, prejudicando a amamentacao e, futuramente, a fala.",
  },
  {
    question: "Voces atendem por convenio?",
    answer:
      "Atualmente o atendimento e particular. Mas emitimos recibos e notas fiscais que podem ser utilizados para reembolso junto ao seu plano de saude. Entre em contato para mais informacoes.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            FAQ
          </span>
          <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Perguntas Frequentes
          </h3>
          <p className="text-muted-foreground">
            Tire suas duvidas mais comuns sobre fonoaudiologia infantil.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
