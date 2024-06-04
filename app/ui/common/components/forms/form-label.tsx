import clsx from 'clsx'

export const Label = ({
  children,
  htmlFor,
  className,
  required,
}: {
  children: React.ReactNode
  htmlFor: string
  className?: string
  required?: boolean
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        'text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong',
        className,
      )}
    >
      {children}

      {required ? (
        <span className='ml-2 font-bold text-red-500 dark:text-red-300'>*</span>
      ) : (
        <></>
      )}
    </label>
  )
}
