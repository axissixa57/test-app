import React from 'react'
import { Layout } from 'antd'

import { Catalog, Header } from '@/components/blocks/'
import { Sidebar, Main, FooterBlock } from './styles'

const Home = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar>Sider</Sidebar>
        <Main>
          <Catalog />
        </Main>
      </Layout>
      <FooterBlock>Footer</FooterBlock>
    </Layout>
  )
}

export default Home
