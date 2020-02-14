import React from 'react'
import { Layout } from 'antd'

import { Catalog, Header, Filter } from '@/components/blocks/'
import { Main } from '@/theme/globalStyle'
import { Sidebar, FooterBlock } from './styles'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar breakpoint="lg" collapsedWidth="0">
          <Filter />
        </Sidebar>
        <Main>
          <Catalog />
        </Main>
      </Layout>
      {/* <FooterBlock>Footer</FooterBlock> */}
    </Layout>
  )
}

export default Home
