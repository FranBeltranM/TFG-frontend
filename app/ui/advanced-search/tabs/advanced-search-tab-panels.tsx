// Libs
import { TabPanels } from '@tremor/react'

// UI
import { FilterByDatesTab } from '@/app/ui/advanced-search/tabs/filter-by-dates-tab'
import { FilterByProvinceTab } from '@/app/ui/advanced-search/tabs/filter-by-province-tab'
import { FilterBySeizedTab } from '@/app/ui/advanced-search/tabs/filter-by-seized-tab'
import { FilterByStolenTab } from '@/app/ui/advanced-search/tabs/filter-by-stolen-tab'

export const AdvancedSearchTabPanels = ({
  params: { province, page = 0, limit = 5, dateFrom, dateTo, filter },
}: {
  params: {
    province: string
    page: number
    limit: number
    dateFrom: string
    dateTo: string
    filter: string
  }
}) => {
  return (
    <TabPanels>
      <FilterByProvinceTab province={province} page={page} limit={limit} />
      <FilterByDatesTab
        dateFrom={dateFrom}
        dateTo={dateTo}
        page={page}
        limit={limit}
      />
      <FilterByStolenTab filter={filter} page={page} limit={limit} />
      <FilterBySeizedTab filter={filter} page={page} limit={limit} />
    </TabPanels>
  )
}
