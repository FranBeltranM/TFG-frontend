// Libs
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
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from '@tremor/react'
import Link from 'next/link'
import {
  FilterByRegisteredDatesData,
  FilterByRegisteredDatesDataSkeleton,
} from '../ui/advanced-search/components/filter-by-registered-dates-data'
import { FilterByRegisteredDatesTab } from '../ui/advanced-search/components/filter-by-registered-dates-tab'

const SearchTypeTabs = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  const { province, page = 0, limit = 5, dateFrom, dateTo } = params

  const defaultTab = ({ params }: { params: Record<string, string> }) => {
    if (params.province !== undefined) {
      return 0
    }

    if (params.dateFrom !== undefined && params.dateTo !== undefined) {
      return 1
    }

    if (params.indicators !== undefined) {
      return 2
    }

    if (params.show === 'stolen') {
      return 3
    }

    if (params.show === 'seized') {
      return 4
    }

    return 0
  }

  return (
    <TabGroup
      className='[&>div]:w-full [&>div]:justify-center'
      defaultIndex={defaultTab({ params })}
    >
      <TabList
        className='flex flex-col items-center md:flex-row'
        variant='solid'
        defaultValue='1'
      >
        <Tab value='1'>Provincia de Matriculación</Tab>
        <Tab value='2'>Matriculado entre 2 fechas</Tab>
        <Link href='/advanced-search?show=stolen' scroll={false}>
          <Tab value='3'>Robados</Tab>
        </Link>
        <Link href='/advanced-search?show=seized' scroll={false}>
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
    <main className='mx-auto max-w-fit md:px-8 lg:max-w-[75vw] xl:max-w-[60vw]'>
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
