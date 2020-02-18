import React from 'react'
import { Layout } from 'antd'

import { Catalog, Filter } from '@/components/blocks/'
import { Main } from '@/theme/globalStyle'
import { Sidebar } from './styles'

const Home = () => {
  return (
    <Layout>
      <Sidebar breakpoint="lg" collapsedWidth="0">
        <Filter />
      </Sidebar>
      <Main>
        <Catalog />
      </Main>
    </Layout>
  )
}

export default Home
