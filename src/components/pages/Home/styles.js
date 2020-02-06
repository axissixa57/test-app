import styled from 'styled-components'
import { Layout } from 'antd'

const { Sider } = Layout

export const Sidebar = styled(Sider)`
  background: ${({ theme }) => theme.whitesmoke};
  border-right: 1px solid rgb(235,237,240);
`
