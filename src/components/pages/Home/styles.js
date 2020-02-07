import styled from 'styled-components'
import { Layout } from 'antd'

const { Sider, Content, Footer } = Layout

export const Sidebar = styled(Sider)`
  background: ${({ theme }) => theme.primary};
  border-right: 1px solid rgb(235, 237, 240);
`
export const Main = styled(Content)`
  background: ${({ theme }) => theme.primary};
`
export const FooterBlock = styled(Footer)`
  border: 1px solid rgb(235, 237, 240);
  background: ${({ theme }) => theme.primary};
`
