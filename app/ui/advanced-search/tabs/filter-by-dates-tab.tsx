// Libs
import { TabPanel } from '@tremor/react'
import { Suspense } from 'react'

// UI
import {
  FilterByRegisteredDatesData,
  FilterByRegisteredDatesDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-by-registered-dates-data'
import { FilterByRegisteredDatesTab } from '@/app/ui/advanced-search/components/filter-by-registered-dates-tab'

export const FilterByDatesTab = ({
  dateFrom,
  dateTo,
  page = 0,
  limit = 5,
}: {
  dateFrom: string
  dateTo: string
  page: number
  limit: number
}) => {
  return (
    <TabPanel className='space-y-4'>
      <FilterByRegisteredDatesTab
        defaultDateFrom={dateFrom}
        defaultDateTo={dateTo}
      />

      <Suspense
        key={dateFrom + dateTo + page + limit}
        fallback={<FilterByRegisteredDatesDataSkeleton limit={+limit} />}
      >
        <FilterByRegisteredDatesData
          dateFrom={dateFrom}
          dateTo={dateTo}
          skip={+page > 1 ? +page * +limit - limit : 0}
          limit={+limit}
          page={+page}
        />
      </Suspense>
    </TabPanel>
  )
}
