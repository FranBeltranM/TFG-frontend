'use client'

// Libs
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

// UI
import { Button } from '@/app/ui/common/components/button'
import {
  FullMoonFaceEmoji,
  NewMoonFaceEmoji,
} from '@/app/ui/common/icons/icons-emoji'
import { LoadingIcon } from '@/app/ui/common/icons/icons-svg'

export const ColorModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted)
    return (
      <Button className='p-1.5'>
        <LoadingIcon className='animate-spin' />
      </Button>
    )

  return (
    <Button
      className='border-none p-2 !shadow-none !drop-shadow-none hover:scale-125 hover:bg-transparent dark:hover:bg-transparent'
      tooltipContent={resolvedTheme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
      onClick={(event) => {
        event.currentTarget.blur()
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <FullMoonFaceEmoji className='size-5 group-hover:text-dark-tremor-content-emphasis' />
      ) : (
        <NewMoonFaceEmoji className='size-5 group-hover:text-tremor-content-emphasis' />
      )}
    </Button>
  )
}
