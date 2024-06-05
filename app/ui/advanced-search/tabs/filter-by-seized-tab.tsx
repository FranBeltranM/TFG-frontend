// Libs
import { TabPanel } from '@tremor/react'
import { Suspense } from 'react'

// UI
import {
  FilterSeizedData,
  FilterSeizedDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-seized-data'

export const FilterBySeizedTab = ({
  filter,
  page = 0,
  limit = 5,
}: {
  filter: string
  page: number
  limit: number
}) => {
  return (
    <TabPanel>
      <Suspense
        key={filter + page + limit}
        fallback={<FilterSeizedDataSkeleton limit={+limit} />}
      >
        <FilterSeizedData
          skip={+page > 1 ? +page * +limit : 0}
          limit={+limit}
          page={+page}
        />
      </Suspense>
    </TabPanel>
  )
}
