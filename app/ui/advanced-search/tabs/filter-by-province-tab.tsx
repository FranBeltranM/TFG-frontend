// Libs
import { TabPanel } from '@tremor/react'
import { Suspense } from 'react'

// UI
import {
  FilterByProvinceData,
  FilterByProvinceDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-by-province-data'
import {
  FilterByProvince,
  FilterByProvinceSkeleton,
} from '@/app/ui/advanced-search/components/filter-by-province-tab'

export const FilterByProvinceTab = ({
  province,
  page = 0,
  limit = 5,
}: {
  province: string
  page: number
  limit: number
}) => {
  return (
    <TabPanel className='space-y-4'>
      <Suspense fallback={<FilterByProvinceSkeleton />}>
        <FilterByProvince defaultValue={province} />
      </Suspense>
      <Suspense
        key={province + page + limit}
        fallback={<FilterByProvinceDataSkeleton limit={+limit} />}
      >
        <FilterByProvinceData
          province={province}
          skip={+page > 1 ? +page * +limit : 0}
          limit={+limit}
          page={+page}
        />
      </Suspense>
    </TabPanel>
  )
}
