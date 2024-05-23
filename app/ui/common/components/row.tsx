export const Row = ({
  label,
  value,
}: {
  label: string
  value: string | number | undefined | null
}) => {
  if (!value || value === '') return <></>

  return (
    <p className='mx-auto grid grid-cols-2 px-2'>
      <span className='text-start'>{label}:</span>
      <span className='text-end'>{value}</span>
    </p>
  )
}
