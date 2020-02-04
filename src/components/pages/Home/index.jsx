import React from 'react'
import { PageHeader, Layout, Input, Button } from 'antd'
import styled from 'styled-components'

const { Footer, Content } = Layout

const Header = styled(PageHeader)`
  & > div {
    display: flex;
    justify-content: space-between;
  }

  span + span {
    display: flex;
    width: 100%;
    margin: 0;

    .search {
      width: 100%;
      padding-right: 12px;
    }
  }
`

const Basket = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`

const Home = props => {
  return (
    <Layout>
      <Header
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        title="TestShop"
        subTitle={
          <>
            <div className="search">
              <Input.Search placeholder="Поиск" />
            </div>
            <div className="userbar">
              <Basket>
                <Button>Login</Button>
              </Basket>
            </div>
          </>
        } />
      <Content>
        <section className="catalog">Content</section>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Home
