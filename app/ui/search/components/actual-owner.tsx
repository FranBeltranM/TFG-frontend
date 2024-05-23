// Domain
import { type Vehicle } from '@/app/modules/vehicle/domain/vehicle'

// UI
import { Row } from '@/app/ui/common/components/row'
import { getRelativeTimeString } from '@/app/ui/utils'
import { Card, Title } from '@tremor/react'

export const ActualOwner = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Card className='rounded-lg drop-shadow-md'>
      <Title className='mb-4 text-center text-2xl font-semibold underline underline-offset-8'>
        Propietario Actual
      </Title>

      <div className='space-y-2 py-4 text-center'>
        <Row
          label='Propietario'
          value={vehicle.indicadores.at(-1)?.persona_fisica_juridica}
        />

        <Row
          label='Propietario desde'
          value={getRelativeTimeString({
            startDateString: vehicle.transferencias.at(-1)?.fecha_tramite ?? '',
          })}
        />

        <Row
          label='Localidad'
          value={
            vehicle.transferencias[vehicle.transferencias.length - 1].municipio
          }
        />

        <Row
          label='Código Postal'
          value={
            vehicle.transferencias[vehicle.transferencias.length - 1]
              .codigo_postal
          }
        />
      </div>
    </Card>
  )
}
