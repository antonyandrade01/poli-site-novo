import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Poliana Licursi | Fonoaudiologa em Primavera do Leste - MT',
  description:
    'Especialista em fala, linguagem, TEA e processamento auditivo. Atendimento humanizado e domiciliar em Primavera do Leste.',
  keywords:
    'fonoaudiologa, fonoaudiologia, Primavera do Leste, MT, autismo, TEA, teste da linguinha, fala infantil',
}

export const viewport: Viewport = {
  themeColor: '#b07c78',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
