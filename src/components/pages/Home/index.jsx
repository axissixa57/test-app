import React from 'react'
import { Layout } from 'antd'

import { Catalog, Header } from '@/components/blocks/'
import { Sidebar } from './styles'

const { Footer, Content } = Layout

const Home = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar>Sider</Sidebar>
        <Content>
          <Catalog />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Home
