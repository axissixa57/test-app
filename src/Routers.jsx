import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Home, Product, NotMatch } from '@/components/pages'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Product} />
        <Route component={NotMatch} />
      </Switch>
    </Router>
  )
}
