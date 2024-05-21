// Libs
import type { Metadata } from 'next'

// UI
import { gabarito } from '@/app/ui/fonts'
import '@/app/ui/globals.css'

export const metadata: Metadata = {
  title: 'CheckV - Fran Beltrán',
  description: 'Trabajo de Fin de Grado de Fran Beltrán',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={gabarito.className}>{children}</body>
    </html>
  )
}
