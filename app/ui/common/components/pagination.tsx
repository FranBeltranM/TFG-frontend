'use client'

// Libs
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

// Constants - Utils
import {
  DEFAULT_LIMIT,
  DEFAULT_PAGE,
  LIMIT_ITEMS_PER_PAGE_OPTIONS,
} from '@/app/lib/constants'

// UI
import { ArrowLeftIcon, ArrowRightIcon } from '@/app/ui/common/icons/icons-svg'
import { generatePagination } from '@/app/ui/utils'
import { Card } from '@tremor/react'

export const PaginationSkeleton = () => {
  return (
    <Card className='grid animate-pulse grid-cols-3 items-center dark:border dark:border-tremor-content'>
      <div>
        <div className='h-6 w-24 rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
      </div>

      <div className='inline-flex items-center justify-center'>
        <PaginationArrow direction='left' href='#' isDisabled={true} />

        <div className='flex -space-x-px'>
          <div className='size-10 items-center justify-center rounded-md border border-tremor-border dark:border-dark-tremor-content-subtle'></div>
          <div className='size-10 items-center justify-center rounded-md border border-tremor-border dark:border-dark-tremor-content-subtle'></div>
          <div className='size-10 items-center justify-center rounded-md border border-tremor-border dark:border-dark-tremor-content-subtle'></div>
          <div className='size-10 items-center justify-center rounded-md border border-tremor-border dark:border-dark-tremor-content-subtle'></div>
          <div className='size-10 items-center justify-center rounded-md border border-tremor-border dark:border-dark-tremor-content-subtle'></div>
        </div>

        <PaginationArrow direction='right' href='#' isDisabled={true} />
      </div>

      <div className='flex items-center justify-end gap-2'>
        <div className='h-8 w-24 rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
        <div className='h-8 w-24 rounded-lg bg-tremor-background-emphasis/25 dark:bg-dark-tremor-background-subtle' />
      </div>
    </Card>
  )
}

const SelectLimit = ({
  limit,
  handleChange,
}: {
  limit: number
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) => {
  return (
    <div className='flex items-center justify-center gap-2 lg:justify-end'>
      <label
        htmlFor='selectLimit'
        className='block text-sm font-medium text-gray-900 dark:text-white'
      >
        Mostrar
      </label>
      <select
        id='selectLimit'
        className='block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        defaultValue={String(limit)}
        onChange={handleChange}
      >
        {LIMIT_ITEMS_PER_PAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

const PaginationNumber = ({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string
  href: string
  position?: 'first' | 'last' | 'middle' | 'single'
  isActive: boolean
}) => {
  const className = clsx(
    'flex size-10 items-center justify-center border border-tremor-border text-sm dark:border-dark-tremor-content-subtle',
    {
      'rounded-l-md': position === 'first' || position === 'single',
      'rounded-r-md': position === 'last' || position === 'single',
      'z-10 bg-blue-500 border-blue-700 text-white': isActive,
      'hover:bg-gray-100': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    },
  )

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}

const PaginationArrow = ({
  href,
  direction,
  isDisabled,
}: {
  href: string
  direction: 'left' | 'right'
  isDisabled?: boolean
}) => {
  const className = clsx(
    'flex size-10 items-center justify-center rounded-md border border-tremor-border dark:border-dark-tremor-content-subtle',
    {
      'pointer-events-none text-tremor-content-subtle dark:text-dark-tremor-content-subtle':
        isDisabled,
      'hover:bg-tremor-background-subtle hover:dark:bg-dark-tremor-background-subtle':
        !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  )

  const icon =
    direction === 'left' ? (
      <ArrowLeftIcon className='w-4' />
    ) : (
      <ArrowRightIcon className='w-4' />
    )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  )
}

const PaginationNumbers = ({
  currentPage,
  totalPages,
  createPageURL,
}: {
  currentPage: number
  totalPages: number
  createPageURL: (pageNumber: number | string) => string
}) => {
  const allPages = generatePagination(currentPage, totalPages)

  return (
    <div className='flex -space-x-px'>
      {allPages.map((page, index) => {
        let position: 'first' | 'last' | 'single' | 'middle' | undefined

        if (index === 0) position = 'first'
        if (index === allPages.length - 1) position = 'last'
        if (allPages.length === 1) position = 'single'
        if (page === '...') position = 'middle'

        return (
          <PaginationNumber
            key={page + index.toString()}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        )
      })}
    </div>
  )
}

export default function Pagination({
  totalPages,
  totalItems,
}: {
  totalPages: number
  totalItems: number
}) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || DEFAULT_PAGE
  const limit = Number(searchParams.get('limit')) || DEFAULT_LIMIT

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const changeLimit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams)
    params.set('limit', e.target.value)
    params.set('page', '1')
    replace(`${pathname}?${params.toString()}`)
  }

  const count = `${totalItems > 0 ? currentPage * limit - limit + 1 : 0} - ${currentPage * limit > totalItems ? totalItems : currentPage * limit}`

  return (
    <Card className='grid grid-cols-1 items-center gap-4 dark:border dark:border-tremor-content dark:bg-dark-tremor-background-subtle md:grid-cols-[1fr_auto_1fr] lg:gap-0'>
      <div className='text-center lg:text-start'>
        {count} / {totalItems}
      </div>

      <div className='inline-flex items-center justify-center'>
        <PaginationArrow
          direction='left'
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <PaginationNumbers
          currentPage={currentPage}
          totalPages={totalPages}
          createPageURL={createPageURL}
        />

        <PaginationArrow
          direction='right'
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>

      <SelectLimit limit={limit} handleChange={changeLimit} />
    </Card>
  )
}
