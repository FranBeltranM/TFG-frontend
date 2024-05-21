// UI
import { Button } from '@/app/ui/common/components/button'
import { F1CarEmoji } from '@/app/ui/common/icons/icons-emoji'
import { DgtLogo } from '@/app/ui/common/icons/icons-svg'
import { TextInput } from '@tremor/react'

export default function Home() {
  return (
    <>
      <main className='flex animate-zoom-in flex-col items-center space-y-4 px-10 py-4 md:py-10'>
        <section className='flex flex-col items-center gap-4 text-center'>
          <F1CarEmoji className='size-8 animate-wobble delay-1000 animate-delay-1000 animate-iteration-count-infinite md:size-16' />

          <h1 className='inline-block bg-gradient-to-r from-purple-300 via-purple-500 to-purple-900 bg-clip-text text-5xl font-bold text-transparent dark:from-purple-100 dark:via-purple-300 dark:to-purple-500'>
            CheckVehicle
          </h1>

          <h2 className='text-center text-4xl font-bold'>
            Obten información de cualquier vehículo
          </h2>

          <h3 className='max-w-lg pt-8 text-center text-2xl font-semibold'>
            Introduce el bastidor del vehículo y obtén en segundos toda la
            información que necesitas
          </h3>

          <p className='max-w-xl pt-8 text-center text-sm font-light'>
            La información que se ofrece en esta web es meramente informativa,
            no se garantiza la exactitud de la información. Esta información se
            obtiene de fuentes públicas y no se garantiza la exactitud de la
            misma. Los logotipos, marcas y demás marcas comerciales del
            fabricante son propiedad de sus respectivos dueños.
          </p>
        </section>
      </main>
      <form className='mt-4 flex w-full animate-fade-in flex-col items-center gap-4'>
        <TextInput
          className='max-w-96'
          placeholder='Introduce el bastidor - (Ej: WVWZZZ1JZXW000010)'
        ></TextInput>
        <Button className='w-full max-w-48 border-purple-500 bg-purple-100 hover:scale-110 hover:bg-purple-700 hover:text-tremor-content-inverted focus:bg-purple-700 dark:bg-purple-600 dark:text-dark-tremor-content-strong dark:hover:bg-purple-300 dark:hover:text-dark-tremor-content-inverted'>
          Buscar
        </Button>
      </form>

      <section className='mt-8 flex animate-fade-in flex-col items-center gap-4'>
        <h3 className='text-xl font-semibold italic text-tremor-content-emphasis dark:text-dark-tremor-content-strong'>
          Datos obtenidos por:
        </h3>
        <div className='rounded-lg bg-tremor-background-emphasis/5 px-8 transition-transform hover:scale-125 dark:bg-dark-tremor-background-emphasis'>
          <DgtLogo className='size-20' />
        </div>
      </section>
    </>
  )
}
