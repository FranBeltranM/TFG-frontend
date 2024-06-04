// UI
import { Button } from '@/app/ui/common/components/button'
import { Label } from '@/app/ui/common/components/forms/form-label'
import { Card } from '@tremor/react'

const generateDefaultDates = () => {
  const today = new Date()
  const lastWeek = new Date(today)
  lastWeek.setDate(lastWeek.getDate() - 7)

  return {
    dateFrom: lastWeek.toISOString().split('T')[0],
    dateTo: today.toISOString().split('T')[0],
  }
}

export const FilterByRegisteredDatesTab = ({
  defaultDateFrom,
  defaultDateTo,
}: {
  defaultDateFrom: string
  defaultDateTo: string
}) => {
  const { dateFrom, dateTo } = generateDefaultDates()

  return (
    <Card>
      <form className='space-y-4'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-6 md:col-span-3'>
            <Label htmlFor='dateFrom' required>
              Desde
            </Label>

            <input
              type='date'
              name='dateFrom'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              defaultValue={defaultDateFrom || dateFrom}
              required
            />
          </div>

          <div className='col-span-6 md:col-span-3'>
            <Label htmlFor='dateTo' required>
              Hasta
            </Label>
            <input
              type='date'
              name='dateTo'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
              defaultValue={defaultDateTo || dateTo}
            />
          </div>
        </div>
        <Button className='w-full' type='submit'>
          Buscar
        </Button>
      </form>
    </Card>
  )
}
