import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'

import { Home, Product, NotMatch } from '@/components/pages'
import { Header } from '@/components/blocks'

export default () => {
  return (
    <Router>
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
    </Router>
  )
}
