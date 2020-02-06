import React from 'react'
import { Provider } from 'react-redux'

import Router from '@/Router'
import store from '@/store'
import { GlobalStyle } from '@/theme/globalStyle'
import { ThemeProviderWrapper } from '@/components/wrappers'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProviderWrapper>
        <Router />
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App
