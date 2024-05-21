// Libs
import clsx from 'clsx'
import type { Metadata } from 'next'

// UI
import { Providers } from '@/app/providers'
import { gabarito } from '@/app/ui/fonts'
import { NavBar } from '@/app/ui/menu/nav-bar'

// Styles
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
    <html lang='es' suppressHydrationWarning>
      <body
        className={clsx(
          `${gabarito.className} flex flex-col justify-between overflow-auto antialiased`,
          {
            'h-screen': true,
            'text-gray-900 dark:text-gray-100': true,
            // 'bg-tremor-background-subtle dark:bg-dark-tremor-background-muted':
            //   true,
            'bg-slate-100 dark:bg-slate-800': true,
          },
        )}
      >
        <Providers>
          <NavBar />
          <main className='mb-auto pt-20'>{children}</main>
          <footer>
            <div className='my-8 flex h-10 w-full flex-col items-center justify-center'>
              <p>
                &copy; {new Date().getFullYear()}{' '}
                {/* <a href='' className=''>
                  Fran Beltrán
                </a> */}
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
