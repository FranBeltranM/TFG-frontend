// Libs
import { Suspense } from 'react'

// UI
import { FilterByProvinceData } from '@/app/ui/advanced-search/components/filter-by-province-data'
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

const SearchTypeTabs = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  const { province, page = 0, limit = 5 } = params

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

    return 0
  }

  return (
    <TabGroup
      className='[&>div]:w-full [&>div]:justify-center'
      defaultIndex={defaultTab({ params })}
    >
      <TabList className='flex items-center' variant='solid' defaultValue='1'>
        <Tab value='1'>Provincia de Matriculación</Tab>
        <Tab value='2'>Matriculado entre 2 fechas</Tab>
        <Tab value='3'>Indicadores</Tab>
      </TabList>
      <TabPanels>
        <TabPanel className='space-y-4'>
          <Suspense fallback={<FitlerByProvinceTabSkeleton />}>
            <FilterByProvinceTab defaultValue={province} />
          </Suspense>
          <FilterByProvinceData
            province={province}
            skip={+page * +limit}
            limit={+limit}
            page={+page}
          />
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
    <main className='mx-auto min-w-fit max-w-[80%] px-8'>
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
