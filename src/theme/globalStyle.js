import { createGlobalStyle } from 'styled-components'
import resetCss from 'reset-css'
import antdCss from 'antd/dist/antd.css'

export const dark = {
  darkblue: '#001529',
}

export const light = {
  whitesmoke: '#f0f2f5',
}

// export const dark = '#001529'

// export const light = '#f0f2f5'

export const GlobalStyle = createGlobalStyle`
    ${resetCss}
    ${antdCss}

    #root, .ant-layout {
     height: 100%;
   }
`
