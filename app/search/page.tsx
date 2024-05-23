// Libs
import { notFound } from 'next/navigation'

// UI
import { ActualOwner } from '@/app/ui/search/components/actual-owner'
import { VehicleInfo } from '@/app/ui/search/components/vehicle-info'
import { VehiclePlateInfo } from '@/app/ui/search/components/vehicle-plate-info'
import { VehicleTransfers } from '@/app/ui/search/components/vehicle-transfers'

// Domain
import { type SearchParams } from '@/app/modules/shared/domain/types'

// Services
import { getVehicleService } from '@/app/modules/vehicle/infrastructure/services'

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: unknown
  searchParams: SearchParams
}) {
  const { vin } = searchParams

  if (!vin) notFound()
  const vehicleResponse = await getVehicleService(vin)

  if (!vehicleResponse?.success) notFound()

  const {
    vehicle,
    brand_model: brandModel,
    technical_data: technicalData,
  } = vehicleResponse.data

  return (
    <main className='mx-auto mt-8 flex max-w-screen-md flex-col space-y-8'>
      <VehicleInfo
        brandModel={brandModel}
        vehicle={vehicle}
        technicalData={technicalData}
      />

      <VehiclePlateInfo vehicle={vehicle} />

      <ActualOwner vehicle={vehicle} />

      <VehicleTransfers vehicle={vehicle} />

      <p className='mx-auto max-w-xl pt-8 text-center text-sm font-light'>
        La información que se ofrece en esta web obtenida de fuentes públicas es
        meramente informativa, y no se garantiza la exactitud de la información.
        Los logotipos y marcas comerciales del fabricante son propiedad de sus
        respectivos dueños.
      </p>
    </main>
  )
}
