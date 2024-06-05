// UI
import { AdvancedSearchTabList } from '@/app/ui/advanced-search/tabs/advanced-search-tab-list'
import { AdvancedSearchTabPanels } from '@/app/ui/advanced-search/tabs/advanced-search-tab-panels'
import { TabGroup, Title } from '@tremor/react'

// Utils
import { defaultTab } from '@/app/ui/advanced-search/utilts'

const SearchTypeTabs = async ({
  params,
}: {
  params: Record<string, string>
}) => {
  const { province, page = '0', limit = '5', dateFrom, dateTo, filter } = params

  return (
    <TabGroup
      className='[&>div]:w-full [&>div]:justify-center'
      defaultIndex={defaultTab({ params })}
    >
      <AdvancedSearchTabList />
      <AdvancedSearchTabPanels
        params={{
          province,
          page: +page,
          limit: +limit,
          dateFrom,
          dateTo,
          filter,
        }}
      />
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
