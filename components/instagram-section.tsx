"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Instagram, Loader2, Play, Layers } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface InstagramPost {
    id: string
    permalink: string
    caption?: string
    mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
    mediaUrl: string
    thumbnailUrl?: string
    sizes?: {
        large?: {
            mediaUrl: string
        }
    }
}

export function InstagramSection() {
    const [posts, setPosts] = useState<InstagramPost[]>([])
    const [loading, setLoading] = useState(true)
    const BEHOLD_URL = "https://feeds.behold.so/6DYClrrfLEIXsVaMPqMs"

    useEffect(() => {
        async function fetchInstagram() {
            try {
                const response = await fetch(BEHOLD_URL)
                const data = await response.json()
                // Pegamos apenas os 6 primeiros
                if (data.posts) {
                    setPosts(data.posts.slice(0, 6))
                }
            } catch (err) {
                console.error("Erro ao carregar Instagram:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchInstagram()
    }, [])

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

        {loading ? (
            <div className="flex h-64 w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => {
                const imageUrl = post.mediaType === "VIDEO"
                ? post.thumbnailUrl || post.mediaUrl
                : post.sizes?.large?.mediaUrl || post.mediaUrl

                return (
                    <AnimatedSection key={post.id} delay={i * 150} className="h-full">
                    <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                    <div className="relative aspect-square w-full overflow-hidden bg-muted">
                    <Image
                    src={imageUrl}
                    alt="Post do Instagram"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute top-3 right-3 text-white drop-shadow-md">
                    {post.mediaType === "VIDEO" && <Play className="h-6 w-6 fill-white/80" />}
                    {post.mediaType === "CAROUSEL_ALBUM" && <Layers className="h-6 w-6 fill-white/80" />}
                    </div>

                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5">
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.caption || "Ver publicação..."}
                    </p>
                    <span className="mt-4 text-xs font-bold text-primary uppercase tracking-wide group-hover:underline">
                    Ver no Instagram &rarr;
                    </span>
                    </div>
                    </a>
                    </AnimatedSection>
                )
            })}
            </div>
        )}
        </div>
        </section>
    )
}
