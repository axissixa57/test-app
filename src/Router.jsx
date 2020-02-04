import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Home } from '@/components/pages'

export default () => (
  <Router>
    <Switch>
      <Route exact path={['/login', '/register']} component={null} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  </Router>
)
