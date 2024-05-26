// Libs
import Image from 'next/image'

// Types
import { type VehicleTechnicalData } from '@/app/modules/vehicle/domain/vehicle'

// UI
import { Card, Title } from '@tremor/react'

const getDistintive = ({
  fuel,
  electricType,
  euro,
}: {
  fuel: string | null
  electricType: string | null
  euro: string | null
}) => {
  if (!fuel || !euro) return null

  if (electricType) {
    if (electricType === 'HVE' || electricType === 'HEV') {
      return (
        <Image
          src='/logos/dgt/distintivo_eco.webp'
          width={200}
          height={200}
          alt='Distintivo ECO'
        />
      )
    }

    if (
      electricType === 'BEV' ||
      electricType === 'PHEV' ||
      electricType === 'REEV'
    ) {
      return (
        <Image
          src='/logos/dgt/distintivo_cero.webp'
          width={200}
          height={200}
          alt='Distintivo Cero'
        />
      )
    }
  }

  if (
    fuel === 'Gas Licuado de Petróleo' ||
    fuel === 'Gas Natural Comprimido' ||
    fuel === 'Gas Natural Licuado'
  ) {
    return (
      <Image
        src='/logos/dgt/distintivo_eco.webp'
        width={200}
        height={200}
        alt='Distintivo ECO'
      />
    )
  }

  if (fuel === 'Gasolina') {
    if (euro.includes('6') || euro.includes('VI')) {
      return (
        <Image
          src='/logos/dgt/distintivo_c.webp'
          width={200}
          height={200}
          alt='Distintivo C'
        />
      )
    }

    if (euro.includes('5') || euro.includes('V')) {
      return (
        <Image
          src='/logos/dgt/distintivo_c.webp'
          width={200}
          height={200}
          alt='Distintivo C'
        />
      )
    }

    if (euro.includes('4') || euro.includes('IV')) {
      return (
        <Image
          src='/logos/dgt/distintivo_c.webp'
          width={200}
          height={200}
          alt='Distintivo C'
        />
      )
    }

    if (euro.includes('3') || euro.includes('III')) {
      return 'B'
    }
  }

  if (fuel === 'Diésel') {
    if (euro.includes('6') || euro.includes('VI')) {
      return (
        <Image
          src='/logos/dgt/distintivo_c.webp'
          width={200}
          height={200}
          alt='Distintivo C'
        />
      )
    }

    if (euro.includes('5') || euro.includes('V')) {
      return (
        <Image
          src='/logos/dgt/distintivo_c.webp'
          width={200}
          height={200}
          alt='Distintivo C'
        />
      )
    }

    if (euro.includes('4') || euro.includes('IV')) {
      return (
        <Image
          src='/logos/dgt/distintivo_b.webp'
          width={200}
          height={200}
          alt='Distintivo B'
        />
      )
    }
  }

  return null
}

export const AmbientalDistintive = ({
  typeFuel,
  technicalData,
}: {
  typeFuel: Array<{
    fecha: string
    valor: string
  }>
  technicalData: VehicleTechnicalData
}) => {
  const fuel = typeFuel.at(-1)?.valor ?? null
  const euro =
    technicalData.nivel_emisiones_euro_itv !== ''
      ? technicalData.nivel_emisiones_euro_itv
      : null
  const electricType =
    technicalData.categoria_vehiculo_electrico !== ''
      ? technicalData.categoria_vehiculo_electrico
      : null

  const distintive = getDistintive({ fuel, euro, electricType })

  if (!distintive) return <></>

  return (
    <Card className='flex flex-col items-center space-y-8 px-8'>
      <Title className='text-center text-2xl font-semibold underline underline-offset-8'>
        Distinto Ambiental
      </Title>

      {distintive}
    </Card>
  )
}
