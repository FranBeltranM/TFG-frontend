// Libs
import clsx from 'clsx'
import Link from 'next/link'

// Services
import { getVehiclesFilteredByRegisteredDatesService } from '@/app/modules/vehicle/infrastructure/services'

// UI
import { Button } from '@/app/ui/common/components/button'
import Pagination, {
  PaginationSkeleton,
} from '@/app/ui/common/components/pagination'
import { Table, TableBody, TableHeader } from '@/app/ui/common/components/table'
import { ArrowRightIcon } from '@/app/ui/common/icons/icons-svg'
import { Card, TableCell, TableHeaderCell, TableRow } from '@tremor/react'

// Utils
import { formatDate } from '@/app/ui/utils'

export const FilterByRegisteredDatesDataSkeleton = ({
  limit = 5,
}: {
  limit: number
}) => {
  return (
    <>
      <Table className={clsx('w-full table-fixed')}>
        <TableHeader>
          <TableHeaderCell className='w-1/4'>Id</TableHeaderCell>
          <TableHeaderCell className='w-1/3'>Bastidor</TableHeaderCell>
          <TableHeaderCell className='hidden w-1/3 md:block'>
            Fecha
          </TableHeaderCell>
          <TableHeaderCell className='w-1/12'>Detalle</TableHeaderCell>
        </TableHeader>

        <TableBody className='dark:divide-tremor-content-emphasis dark:text-dark-tremor-content-strong'>
          {[...Array(limit)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className='my-1 h-[34px] w-4 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
              <TableCell>
                <div className='my-1 h-[34px] w-44 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
              <TableCell className='hidden md:block'>
                <div className='my-1 h-[34px] w-32 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
              <TableCell>
                <div className='my-1 h-[34px] w-12 animate-pulse rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationSkeleton />
    </>
  )
}

export const FilterByRegisteredDatesData = async ({
  dateFrom,
  dateTo,
  skip,
  limit,
  page,
}: {
  dateFrom: string | undefined
  dateTo: string | undefined
  skip: number
  limit: number
  page: number
}) => {
  if (!dateFrom || !dateTo) return <></>

  const results = await getVehiclesFilteredByRegisteredDatesService({
    dateFrom,
    dateTo,
    skip,
    limit,
  })

  if (!results?.success) {
    return <div>Ha ocurrido un problema...</div>
  }

  if (results.data.results.length === 0) {
    return (
      <Card>
        <div>No se encontraron resultados</div>
      </Card>
    )
  }

  const totalPages = null
  const totalItems = null
  const items = results.data.results.length

  return (
    <>
      <Table className={clsx('w-full table-fixed')}>
        <TableHeader>
          <TableHeaderCell className='w-1/4'>Id</TableHeaderCell>
          <TableHeaderCell className='w-1/3'>Bastidor</TableHeaderCell>
          <TableHeaderCell className='hidden w-1/3 md:block'>
            Fecha
          </TableHeaderCell>
          <TableHeaderCell className='w-1/12'>Detalle</TableHeaderCell>
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
                  <Button className='w-full'>
                    <ArrowRightIcon className='w-4' />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        totalPages={totalPages}
        totalItems={totalItems}
        allowNext={items < limit}
      />
    </>
  )
}
