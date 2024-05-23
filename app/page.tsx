// UI
import { F1CarEmoji } from '@/app/ui/common/icons/icons-emoji'
import { DgtLogo } from '@/app/ui/common/icons/icons-svg'
import { FormSearch } from '@/app/ui/home/form-search'

export default function Home() {
  return (
    <main className='animate-fade-in'>
      <section className='px-10 py-4 md:py-10'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <F1CarEmoji className='size-8 animate-wobble delay-1000 animate-delay-1000 animate-iteration-count-infinite md:size-16' />

          <h1 className='inline-block bg-gradient-to-r from-purple-300 via-purple-500 to-purple-900 bg-clip-text text-5xl font-bold text-transparent dark:from-purple-100 dark:via-purple-300 dark:to-purple-500'>
            CheckVehicle
          </h1>

          <h2 className='text-center text-4xl font-bold'>
            Obtén información de cualquier vehículo
          </h2>

          <h3 className='max-w-lg pt-8 text-center text-2xl font-semibold'>
            Introduce el bastidor del vehículo y obtén en segundos toda la
            información que necesitas
          </h3>
        </div>
      </section>

      <FormSearch />

      <section className='mt-8 flex flex-col items-center gap-4'>
        <h3 className='text-xl font-semibold italic text-tremor-content-emphasis dark:text-dark-tremor-content-strong'>
          Datos obtenidos por:
        </h3>
        <div className='rounded-lg bg-tremor-background-emphasis/5 px-8 transition-transform hover:scale-125 dark:bg-dark-tremor-background-emphasis'>
          <DgtLogo className='size-20' />
        </div>
      </section>
    </main>
  )
}
