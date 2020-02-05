import React from 'react'
import { Layout } from 'antd'

import { Catalog, Header } from '@/components/blocks/'

const { Footer, Content, Sider } = Layout

const Home = props => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Catalog />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Home
