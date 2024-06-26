// Libs
import Link from 'next/link'

// UI
import { Button } from '@/app/ui/common/components/button'
import { ColorModeSwitch } from '@/app/ui/common/components/color-mode-switch'
import { LogoIcon } from '@/app/ui/common/icons/icons-svg'
import { Title } from '@tremor/react'

export const NavBar = () => {
  return (
    <nav className='fixed z-10 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'>
      <div className='p-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between md:grid md:grid-cols-3 md:items-center'>
          <Title className='mr-auto flex items-center gap-2'>
            <LogoIcon className='ml-2 size-8' />
            <Link href='/' className=''>
              <span className='hidden md:block'>CheckV</span>
            </Link>
          </Title>

          <div className='mx-auto flex gap-4'>
            <Link href='/'>
              <Button className='border-none bg-transparent !shadow-none !drop-shadow-none hover:scale-110 dark:text-dark-tremor-content-emphasis'>
                <span className='hidden md:block'>Búsqueda Simple</span>
                <span className='md:hidden'>Simple</span>
              </Button>
            </Link>
            <Link className='pl-4' href='/advanced-search'>
              <Button className='border-none bg-transparent !shadow-none !drop-shadow-none hover:scale-110 dark:text-dark-tremor-content-emphasis'>
                <span className='hidden md:block'>Búsqueda Avanzada</span>
                <span className='md:hidden'>Avanzada</span>
              </Button>
            </Link>

            <Link
              className='hidden pl-4 md:block'
              href='https://api-tfg.franbeltran.es/api/v1/docs/'
              target='_blank'
            >
              <Button className='border-none bg-transparent !shadow-none !drop-shadow-none hover:scale-110 dark:text-dark-tremor-content-emphasis'>
                <span className='hidden md:block'>API</span>
              </Button>
            </Link>
          </div>

          <div className='ml-auto'>
            <ColorModeSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}
