// UI
import { NotFoundFear } from '@/app/ui/common/icons/peeps'
import { Card, Title } from '@tremor/react'

export default function NotFound() {
  return (
    <main className='mx-auto mt-8 flex max-w-screen-md flex-col space-y-8'>
      <NotFoundFear className='h-[40vh] w-auto' />
      <Card className='flex flex-col gap-4'>
        <Title className='!text-4xl font-bold'>Oops!</Title>
        <h2 className='!text-2xl font-semibold'>
          Parece que no disponemos de datos del vehículo solicitado.
        </h2>
        <h2 className='!text-xl text-gray-400 dark:text-gray-200'>
          Por favor, tenga en cuenta que nuestros registros comienzan en
          Diciembre de 2014.
        </h2>
      </Card>
    </main>
  )
}
