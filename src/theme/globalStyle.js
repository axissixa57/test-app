import { createGlobalStyle } from 'styled-components'
import resetCss from 'reset-css'
import antdCss from 'antd/dist/antd.css'

export const GlobalStyle = createGlobalStyle`
    ${resetCss}
    ${antdCss}

    #root, .ant-layout {
     height: 100%;
   }
`
