import { type Vehicle } from '@/app/modules/vehicle/domain/vehicle'
import { Card } from '@tremor/react'

export const VehicleAlerts = ({ vehicle }: { vehicle: Vehicle }) => {
  const hasBeenStolen = vehicle.indicadores.some(
    (indicator) => indicator.sustraccion,
  )

  const hasBeenFrozen = vehicle.indicadores.some(
    (indicator) => indicator.embargo,
  )

  const hasBeenDefinitivelyDeregistered = vehicle.indicadores.some(
    (indicator) => indicator.baja_definitiva,
  )

  const hasBeenTemporarilyDeregistered = vehicle.indicadores.some(
    (indicator) => indicator.baja_temporal,
  )

  return (
    <div className='flex flex-col space-y-4'>
      {hasBeenStolen && (
        <Card className='flex flex-col space-y-2 bg-red-100 px-8'>
          <span className='text-sm font-semibold text-red-600 underline underline-offset-4'>
            Alerta de robo
          </span>

          <span className='text-sm font-light'>
            Atención, el vehículo ha sido indicado como robado en algún momento
            de su vida, sería interesante que revisará el por qué con el
            comprador.
          </span>
        </Card>
      )}
      {hasBeenFrozen && (
        <Card className='flex flex-col space-y-2 bg-orange-100 px-8'>
          <span className='text-sm font-semibold text-orange-500 underline underline-offset-4'>
            Alerta de embargo
          </span>

          <span className='text-sm font-light'>
            Atención, el vehículo ha sido embargado en algún momento de su vida,
            sería interesante que se interase por el motivo con el comprador.
          </span>
        </Card>
      )}
      {hasBeenDefinitivelyDeregistered && (
        <Card className='flex flex-col space-y-2 bg-red-100 px-8'>
          <span className='text-sm font-semibold text-red-500 underline underline-offset-4'>
            Alerta de baja definitiva
          </span>

          <span className='text-sm font-light'>
            Atención, el vehículo ha sido dado de baja definitiva. Esto puede
            ser por diferentes motivos, pero es importante que lo tenga en
            cuenta.
          </span>
        </Card>
      )}
      {hasBeenTemporarilyDeregistered && (
        <Card className='flex flex-col space-y-2 bg-orange-100 px-8'>
          <span className='text-sm font-semibold text-orange-500 underline underline-offset-4'>
            Alerta de baja temporal
          </span>

          <span className='text-sm font-light'>
            Atención, el vehículo ha sido dado de baja temporal. Esto puede ser
            por diferentes motivos, pero es importante que lo tenga en cuenta.
          </span>
        </Card>
      )}
    </div>
  )
}
