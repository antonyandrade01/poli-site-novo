import { MapPin, Phone, Instagram, Baby } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-12 text-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <Baby className="h-6 w-6 text-secondary" aria-hidden="true" />
            <span className="text-xl font-bold tracking-wider">
              Poliana Licursi
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-background/70">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
              Primavera do Leste - Mato Grosso
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" aria-hidden="true" />
              (66) 9259-7047
            </p>
          </div>

          <a
            href="https://instagram.com/fonopolianalicursi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-secondary"
            aria-label="Perfil no Instagram da Poliana Licursi"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @fonopolianalicursi
          </a>

          <div className="mt-4 w-full border-t border-background/10 pt-6">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Poliana Licursi. Todos os direitos
              reservados.
            </p>
            <p className="mt-1 text-xs text-background/30">
              Feito com carinho por Antony Andrade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
