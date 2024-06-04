// Libs
import clsx from 'clsx'
import Link from 'next/link'

// Services
import { getVehiclesFilteredByProvinceService } from '@/app/modules/vehicle/infrastructure/services'

// UI
import { Button } from '@/app/ui/common/components/button'
import Pagination, {
  PaginationSkeleton,
} from '@/app/ui/common/components/pagination'
import { Table, TableBody, TableHeader } from '@/app/ui/common/components/table'
import { TableCell, TableHeaderCell, TableRow } from '@tremor/react'

// Utils
import { formatDate } from '@/app/ui/utils'

export const FilterByProvinceDataSkeleton = () => {
  return (
    <>
      <Table className={clsx('w-full table-fixed')}>
        <TableHeader>
          <TableHeaderCell className='w-auto'>Id</TableHeaderCell>
          <TableHeaderCell className='w-auto'>Bastidor</TableHeaderCell>
          <TableHeaderCell className='hidden w-auto md:block'>
            Fecha
          </TableHeaderCell>
          <TableHeaderCell className='w-auto'>Detalle</TableHeaderCell>
        </TableHeader>

        <TableBody className='dark:divide-tremor-content-emphasis dark:text-dark-tremor-content-strong'>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className='my-1 h-[34px] w-4 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
              <TableCell>
                <div className='my-1 h-[34px] w-56 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
              <TableCell className='hidden md:block'>
                <div className='my-1 h-[34px] w-32 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
              <TableCell>
                <div className='my-1 h-[34px] w-20 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationSkeleton />
    </>
  )
}

export const FilterByProvinceData = async ({
  province,
  skip,
  limit,
  page,
}: {
  province: string | null
  skip: number
  limit: number
  page: number
}) => {
  if (!province) return <></>

  const results = await getVehiclesFilteredByProvinceService({
    province,
    skip,
    limit,
  })

  if (!results || !results?.success) {
    return <div>Ha ocurrido un problema...</div>
  }

  const totalPages = results.data.totalPages
  const totalItems = results.data.total

  return (
    <>
      <Table className={clsx('w-full table-fixed')}>
        <TableHeader>
          <TableHeaderCell className='w-auto'>Id</TableHeaderCell>
          <TableHeaderCell className='w-auto'>Bastidor</TableHeaderCell>
          <TableHeaderCell className='hidden w-auto md:block'>
            Fecha
          </TableHeaderCell>
          <TableHeaderCell className='w-auto'>Detalle</TableHeaderCell>
        </TableHeader>

        <TableBody className='dark:divide-tremor-content-emphasis dark:text-dark-tremor-content-strong'>
          {results.data.results.map((vehicle, index) => (
            <TableRow key={vehicle.bastidor_itv}>
              <TableCell>
                {page > 1 ? (page - 1) * limit + index + 1 : index + 1}
              </TableCell>
              <TableCell>{vehicle.bastidor_itv}</TableCell>
              <TableCell className='hidden md:block'>
                {formatDate({
                  date: vehicle.fecha_matricula?.at(-1)?.fecha ?? '',
                  format: 'DD MMM. YYYY',
                })}
              </TableCell>
              <TableCell>
                <Link href={`/search?vin=${vehicle.bastidor_itv}`}>
                  <Button className='w-full'>Ir</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination totalItems={totalItems} totalPages={totalPages} />
    </>
  )
}
