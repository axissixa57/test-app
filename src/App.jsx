import React from 'react'

import Routers from '@/Routers'
import { GlobalStyle } from '@/theme/globalStyle'
import {
  ThemeProviderWrapper,
  IntlProviderWrapper,
} from '@/components/wrappers'

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProviderWrapper>
      <IntlProviderWrapper>
        <Routers />
      </IntlProviderWrapper>
    </ThemeProviderWrapper>
  </>
)

export default App
