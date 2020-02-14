import styled, { createGlobalStyle } from 'styled-components'
import { Layout } from 'antd'
import resetCss from 'reset-css'
import antdCss from 'antd/dist/antd.css'

const { Content } = Layout

export const dark = {
  primary: '#001529',
  secondary: '#fff',
  black: '#000',
  bulb: 'yellow',
}

export const light = {
  primary: 'whitesmoke',
  secondary: '#000',
  black: '#000',
  bulb: 'grey',
}

export const GlobalStyle = createGlobalStyle`
    ${resetCss}
    ${antdCss}

    #root, .ant-layout {
     height: 100%;
   }
`

export const Main = styled(Content)`
  background: ${({ theme }) => theme.primary};
`
