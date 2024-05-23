// Domain
import { type Vehicle } from '@/app/modules/vehicle/domain/vehicle'

// UI
import { formatDate } from '@/app/ui/utils'
import { Card, Title } from '@tremor/react'
import { Row } from '../../common/components/row'

export const VehiclePlateInfo = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Card className='rounded-lg drop-shadow-md'>
      <Title className='mb-4 text-center text-2xl font-semibold underline underline-offset-8'>
        Datos Matrícula
      </Title>

      <div className='space-y-2 py-4 text-center'>
        <Row label='Bastidor' value={vehicle.bastidor_itv} />

        <Row
          label='Vehículo'
          value={
            vehicle.fecha_primera_matriculacion
              ? 'Importado / Rematriculado'
              : 'Nacional'
          }
        />

        <Row
          label='Fecha matrícula actual'
          value={formatDate({
            date: vehicle.fecha_matricula.at(-1)?.fecha ?? '',
            format: 'DD MMM. YYYY',
          })}
        />

        {vehicle.fecha_primera_matriculacion && (
          <Row
            label='Fecha primera matrícula'
            value={formatDate({
              date: vehicle.fecha_primera_matriculacion?.at(-1)?.fecha ?? '',
              format: 'DD MMM. YYYY',
            })}
          />
        )}
      </div>
    </Card>
  )
}
