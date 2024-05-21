// Libs
import clsx from 'clsx'

// UI
import { Button as TremorButton, type ButtonProps } from '@tremor/react'

export const Button = (
  props: ButtonProps & { children: React.ReactNode } & {
    tooltipContent?: string
  },
) => {
  const { tooltipContent, ...rest } = props

  if (tooltipContent) {
    return (
      <TremorButton
        {...rest}
        tooltip={tooltipContent}
        className={clsx(
          'active:scale-95',
          'transition-transform duration-150 ease-in-out',
          'group !rounded-lg bg-transparent text-sm',
          'border-dark-tremor-content-emphasis text-dark-tremor-content-subtle hover:border-transparent hover:bg-tremor-background-subtle focus:bg-gray-100 focus:ring-2 focus:ring-gray-100',
          'dark:border-tremor-content-emphasis dark:bg-transparent dark:text-tremor-content-subtle dark:hover:border-transparent dark:hover:bg-gray-700 dark:hover:text-dark-tremor-content-emphasis dark:focus:bg-dark-tremor-background-subtle dark:focus:ring-gray-700',
          props.className,
        )}
      >
        {props.children}
      </TremorButton>
    )
  }

  return (
    <TremorButton
      {...props}
      className={clsx(
        'active:scale-95',
        'transition-transform duration-150 ease-in-out',
        'group !rounded-lg bg-transparent text-sm',
        'border-dark-tremor-content-emphasis text-dark-tremor-content-subtle hover:border-transparent hover:bg-tremor-background-subtle focus:bg-gray-100 focus:ring-2 focus:ring-gray-100',
        'dark:border-tremor-content-emphasis dark:bg-transparent dark:text-tremor-content-subtle dark:hover:border-transparent dark:hover:bg-gray-700 dark:hover:text-dark-tremor-content-emphasis dark:focus:bg-dark-tremor-background-subtle dark:focus:ring-gray-700',
        props.className,
      )}
    >
      {props.children}
    </TremorButton>
  )
}
