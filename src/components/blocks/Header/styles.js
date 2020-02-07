import styled from 'styled-components'
import { PageHeader } from 'antd'

export const Header = styled(PageHeader)`
  border: 1px solid rgb(235, 237, 240);
  background: ${({ theme }) => theme.primary};
  
  & > div {
    display: flex;
    justify-content: space-between;
  }

  .ant-page-header-heading-title {
    color: ${({ theme }) => theme.secondary};
  }

  span + span {
    display: flex;
    width: 100%;
    margin: 0;

    .search {
      width: 100%;
      padding-right: 12px;
    }
  }
`
