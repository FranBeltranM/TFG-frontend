'use client'

// Libs
import { useRouter } from 'next/navigation'
import { type FormEvent } from 'react'

// UI
import { Button } from '@/app/ui/common/components/button'
import { TextInput } from '@tremor/react'

export const FormSearch = () => {
  const { push } = useRouter()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const vin = formData.get('vin') as string

    push(`/search?vin=${vin}`)
  }

  return (
    <form
      className='mt-4 flex w-full flex-col items-center gap-4'
      onSubmit={handleSubmit}
    >
      <TextInput
        className='max-w-96'
        name='vin'
        placeholder='Introduce el bastidor - (Ej: WVWZZZ1JZXW000010)'
        required
      />
      <Button
        className='w-full max-w-48 border-purple-500 bg-purple-100 hover:scale-110 hover:bg-purple-700 hover:text-tremor-content-inverted focus:bg-purple-700 dark:bg-purple-600 dark:text-dark-tremor-content-strong dark:hover:bg-purple-300 dark:hover:text-dark-tremor-content-inverted'
        type='submit'
      >
        Buscar
      </Button>
    </form>
  )
}
