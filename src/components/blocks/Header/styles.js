import styled from 'styled-components'
import { PageHeader } from 'antd'

export const Header = styled(PageHeader)`
  border: 1px solid rgb(235, 237, 240);
  ${props => console.log(props)}
  background: ${({ theme }) => theme.whitesmoke};

  & > div {
    display: flex;
    justify-content: space-between;
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
