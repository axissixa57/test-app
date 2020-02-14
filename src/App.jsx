import React from 'react'
import { Provider } from 'react-redux'

import Routers from '@/Routers'
import store from '@/store'
import { GlobalStyle } from '@/theme/globalStyle'
import { ThemeProviderWrapper } from '@/components/wrappers'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProviderWrapper>
        <Routers />
      </ThemeProviderWrapper>
    </Provider>
  )
}

export default App
