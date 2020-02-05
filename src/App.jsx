import React from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import store from '@/store'

import { GlobalStyle } from '@/theme/globalStyle'

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>
)

export default App
