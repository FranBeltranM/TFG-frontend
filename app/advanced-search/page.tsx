// Libs
import Link from 'next/link'
import { Suspense } from 'react'

// UI
import {
  FilterByProvinceData,
  FilterByProvinceDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-by-province-data'
import {
  FilterByProvinceTab,
  FitlerByProvinceTabSkeleton,
} from '@/app/ui/advanced-search/components/filter-by-province-tab'
import {
  FilterByRegisteredDatesData,
  FilterByRegisteredDatesDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-by-registered-dates-data'
import { FilterByRegisteredDatesTab } from '@/app/ui/advanced-search/components/filter-by-registered-dates-tab'
import {
  FilterSeizedData,
  FilterSeizedDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-seized-data'
import {
  FilterStolenData,
  FilterStolenDataSkeleton,
} from '@/app/ui/advanced-search/components/filter-stolen-data'
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from '@tremor/react'

const defaultTab = ({ params }: { params: Record<string, string> }) => {
  const { filter, province, dateFrom, dateTo } = params

  const filtersRoutes: Record<string, number> = {
    stolen: 2,
    seized: 3,
  }

  if (filter !== undefined) return filtersRoutes[filter] || 0
  if (dateFrom !== undefined && dateTo !== undefined) return 1
  if (province !== undefined) return 0

  return 0
}

const SearchTypeTabs = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  const { province, page = 0, limit = 5, dateFrom, dateTo, filter } = params

  return (
    <TabGroup
      className='[&>div]:w-full [&>div]:justify-center'
      defaultIndex={defaultTab({ params })}
    >
      <TabList
        className='flex flex-col items-center md:flex-row'
        variant='solid'
      >
        <Link href='/advanced-search' scroll={false}>
          <Tab value='1'>Provincia de Matriculación</Tab>
        </Link>
        <Link href='/advanced-search' scroll={false}>
          <Tab value='2'>Matriculado entre 2 fechas</Tab>
        </Link>
        <Link href='/advanced-search?filter=stolen' scroll={false}>
          <Tab value='3'>Robados</Tab>
        </Link>
        <Link href='/advanced-search?filter=seized' scroll={false}>
          <Tab value='4'>Embargados</Tab>
        </Link>
      </TabList>
      <TabPanels>
        <TabPanel className='space-y-4'>
          <Suspense fallback={<FitlerByProvinceTabSkeleton />}>
            <FilterByProvinceTab defaultValue={province} />
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
              skip={+page > 1 ? +page * +limit : 0}
              limit={+limit}
              page={+page}
            />
          </Suspense>
        </TabPanel>
        <TabPanel>
          <Suspense
            key={filter + page + limit}
            fallback={<FilterStolenDataSkeleton limit={+limit} />}
          >
            <FilterStolenData
              skip={+page > 1 ? +page * +limit : 0}
              limit={+limit}
              page={+page}
            />
          </Suspense>
        </TabPanel>
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
      </TabPanels>
    </TabGroup>
  )
}

export default async function AdvancedSearchPage({
  searchParams,
}: {
  searchParams: Record<string, string>
}) {
  return (
    <main className='mx-auto max-w-[80vw] md:px-8 lg:max-w-[75vw] xl:max-w-[60vw]'>
      <section className='space-y-4'>
        <div className='flex flex-col items-center gap-2'>
          <Title className='font-bold'>Búsqueda avanzada</Title>
          <h2 className='mx-auto font-light'>
            Aquí tiene a su alcance búsquedas según criterios que podrían
            interesarle
          </h2>
        </div>
        <SearchTypeTabs params={searchParams} />
      </section>
    </main>
  )
}
