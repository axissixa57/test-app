import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { Layout } from 'antd'

import { Home, Product, NotMatch } from '@/components/pages'
import { Header } from '@/components/blocks'

export default () => {
  return (
    <Router>
      <div className="app-wrapper-content">
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={Product} />
            <Route component={NotMatch} />
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}
