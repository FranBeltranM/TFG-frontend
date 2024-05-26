// Domain
import {
  type Vehicle,
  type VehicleBrandModel,
  type VehicleTechnicalData,
} from '@/app/modules/vehicle/domain/vehicle'

// UI
import { Row } from '@/app/ui/common/components/row'
import { BrandLogo } from '@/app/ui/common/icons/brand-logos'
import { Card, Title } from '@tremor/react'

const convertKWtoCV = (kw: number) => Math.round(kw * 1.35962162)

export const VehicleInfo = ({
  brandModel,
  vehicle,
  technicalData,
}: {
  brandModel: VehicleBrandModel
  vehicle: Vehicle
  technicalData: VehicleTechnicalData
}) => {
  return (
    <Card className='rounded-lg drop-shadow-md'>
      <Title className='text-center text-2xl font-semibold underline underline-offset-8'>
        Datos Vehículo
      </Title>

      <div className='space-y-2 py-4 text-center'>
        <BrandLogo
          brand={brandModel.marca}
          className='mx-auto h-40 w-auto dark:rounded-lg dark:bg-dark-tremor-background-emphasis'
        />
        <Row label='Marca' value={brandModel.marca} />
        <Row label='Modelo' value={brandModel.modelo} />
        <Row label='Combustible' value={vehicle.propulsion_itv.at(-1)?.valor} />
        <Row label='Cilindrada' value={`${technicalData.cilindrada_itv} cm³`} />

        {technicalData.kw_itv > 0 && (
          <Row
            label='Potencia'
            value={`${convertKWtoCV(technicalData.kw_itv)} CV (${technicalData.kw_itv} kW)`}
          />
        )}

        <Row
          label='Potencia Fiscal'
          value={`${technicalData.potencia_itv} cvf`}
        />
        <Row
          label='Plazas'
          value={`${technicalData.numero_plazas} (máximo ${technicalData.numero_plazas_maximo})`}
        />

        {technicalData.co2_itv > 0 && (
          <Row label='Emisiones' value={`${technicalData.co2_itv} g/km`} />
        )}

        <Row
          label='Homologación'
          value={technicalData.nivel_emisiones_euro_itv}
        />
        <Row
          label='Homologación Europea'
          value={technicalData.categoria_homologacion_europea_itv}
        />
      </div>
    </Card>
  )
}
