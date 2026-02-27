"use client"

import { Instagram } from "lucide-react"
import Script from "next/script"
import { AnimatedSection } from "@/components/animated-section"

export function InstagramSection() {
    return (
        <section id="conteudo" className="py-20 bg-muted/30 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
        <div>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
        <Instagram className="h-4 w-4" />
        Dicas e Conteúdos
        </span>
        <h3 className="text-3xl font-bold text-foreground md:text-4xl">
        Acompanhe no Instagram
        </h3>
        <p className="mt-2 text-muted-foreground max-w-xl">
        Compartilho diariamente informações valiosas para ajudar pais e mães no desenvolvimento de seus filhos.
        </p>
        </div>
        <a
        href="https://www.instagram.com/fonopolianalicursi/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
        >
        Seguir @fonopolianalicursi
        </a>
        </AnimatedSection>

        <AnimatedSection delay={200} className="w-full">

        <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="lazyOnload"
        />

        <iframe
        src="//lightwidget.com/widgets/dc99873aa2a55f32a1a03d4feda13fdb.html"
        scrolling="no"
        allowTransparency={true}
        className="lightwidget-widget"
        style={{ width: "100%", border: 0, overflow: "hidden" }}
        ></iframe>

        </AnimatedSection>
        </div>
        </section>
    )
}
