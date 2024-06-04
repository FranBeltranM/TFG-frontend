// Services
import { getProvincesCodeService } from '@/app/modules/constants/infrastructure/service'

// UI
import { Button } from '@/app/ui/common/components/button'
import { Card, SearchSelect, SearchSelectItem } from '@tremor/react'

export const FitlerByProvinceTabSkeleton = () => {
  return (
    <Card>
      <div className='h-10 w-full animate-pulse bg-tremor-background-emphasis/25 p-1 dark:bg-dark-tremor-background-subtle' />
    </Card>
  )
}

export const FilterByProvinceTab = async ({
  defaultValue,
}: {
  defaultValue?: string
}) => {
  const provinces = await getProvincesCodeService()

  if (!provinces || !provinces?.success) {
    return <div>Loading...</div>
  }

  return (
    <Card>
      <form className='space-y-4'>
        <SearchSelect
          name='province'
          placeholder='Seleccione una provincia'
          defaultValue={defaultValue}
        >
          {provinces.data.map((province) => (
            <SearchSelectItem key={province.value} value={province.value}>
              {province.label}
            </SearchSelectItem>
          ))}
        </SearchSelect>

        <Button className='w-full' type='submit'>
          Buscar
        </Button>
      </form>
    </Card>
  )
}
