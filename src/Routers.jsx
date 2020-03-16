import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import { Home, Product, NotMatch } from '@/components/pages'
import { Header } from '@/components/blocks'

export default () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={['/', '/data', '/product/:id']}
          render={() => (
            <div className="app-wrapper-content">
              <Layout>
                <Header />
                <Route exact path={['/', '/data']} component={Home} />
                <Route exact path="/product/:id" component={Product} />
              </Layout>
            </div>
          )} />
        <Route component={NotMatch} />
      </Switch>
    </>
  )
}
