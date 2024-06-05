// Libs
import clsx from 'clsx'
import type { Metadata } from 'next'
import Link from 'next/link'

// UI
import { Providers } from '@/app/providers'
import { Button } from '@/app/ui/common/components/button'
import { GitHubIcon, LinkedInIcon } from '@/app/ui/common/icons/icons-svg'
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
          <main className='mb-auto px-4 pt-20 md:px-0'>{children}</main>
          <footer>
            <div className='my-8 flex h-10 w-full flex-col items-center justify-center gap-4'>
              <div>
                <Link
                  href='https://github.com/FranBeltranM/TFG-2024'
                  target='_blank'
                >
                  <Button
                    className='border-none bg-transparent !shadow-none !drop-shadow-none hover:scale-110 dark:text-dark-tremor-content-emphasis'
                    tooltipContent='Repositorio de Backend'
                  >
                    <GitHubIcon className='size-5' />
                  </Button>
                </Link>

                <Link
                  href='https://www.linkedin.com/in/franbelm'
                  target='_blank'
                >
                  <Button
                    className='border-none bg-transparent !shadow-none !drop-shadow-none hover:scale-110 dark:text-dark-tremor-content-emphasis'
                    tooltipContent='Mi perfil de LinkedIn'
                  >
                    <LinkedInIcon className='size-5' />
                  </Button>
                </Link>

                <Link
                  href='https://github.com/FranBeltranM/TFG-Frontend'
                  target='_blank'
                >
                  <Button
                    className='border-none bg-transparent !shadow-none !drop-shadow-none hover:scale-110 dark:text-dark-tremor-content-emphasis'
                    tooltipContent='Repositorio de Frontend'
                  >
                    <GitHubIcon className='size-5' />
                  </Button>
                </Link>
              </div>

              <p>
                &copy; {new Date().getFullYear()}{' '}
                <a href='' className=''>
                  Fran Beltrán
                </a>
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
