// Libs
import { TabPanel } from '@tremor/react'
import { Suspense } from 'react'

// UI
import {
  FilterStolenData,
  FilterStolenDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-stolen-data'

export const FilterByStolenTab = ({
  filter,
  page = 0,
  limit = 5,
}: {
  filter: string
  page: number
  limit: number
}) => {
  if (filter !== 'stolen') return <></>

  return (
    <TabPanel>
      <Suspense
        key={filter + page + limit}
        fallback={<FilterStolenDataSkeleton limit={+limit} />}
      >
        <FilterStolenData
          skip={+page > 1 ? +page * +limit - limit : 0}
          limit={+limit}
          page={+page}
        />
      </Suspense>
    </TabPanel>
  )
}
