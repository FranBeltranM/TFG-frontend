// Libs
import Link from 'next/link'

// UI
import { Tab, TabList } from '@tremor/react'

export const AdvancedSearchTabList = () => {
  return (
    <TabList className='flex flex-col items-center md:flex-row' variant='solid'>
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
  )
}
