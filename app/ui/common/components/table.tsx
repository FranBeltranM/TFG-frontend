// Libs
import clsx from 'clsx'
import { type ReactNode } from 'react'

// UI
import {
  TableBody as TableBodyTremor,
  TableHead as TableHeadTremor,
  TableRow as TableRowTremor,
  Table as TableTremor,
} from '@tremor/react'

export const Table = ({
  className,
  children,
}: {
  className?: string | undefined
  children: ReactNode
}) => {
  return (
    <TableTremor
      className={clsx(
        'mb-8 rounded-lg outline outline-1 outline-tremor-border drop-shadow-sm dark:outline-dark-tremor-content',
        {
          [className ?? '']: className,
        },
      )}
    >
      {children}
    </TableTremor>
  )
}

export const TableHeader = ({
  className,
  children,
}: {
  className?: string | undefined
  children: ReactNode
}) => {
  return (
    <TableHeadTremor
      className={clsx(
        'border-b border-b-tremor-border bg-tremor-background-subtle dark:border-b-dark-tremor-border dark:bg-dark-tremor-background-muted/80',
        {
          [className ?? '']: className,
        },
      )}
    >
      <TableRowTremor>{children}</TableRowTremor>
    </TableHeadTremor>
  )
}

export const TableBody = ({
  className,
  children,
}: {
  className?: string | undefined
  children: ReactNode
}) => {
  return (
    <TableBodyTremor
      className={clsx(
        'bg-tremor-content-inverted dark:bg-dark-tremor-background-subtle',
        {
          [className ?? '']: className,
        },
      )}
    >
      {children}
    </TableBodyTremor>
  )
}
