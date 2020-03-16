import styled from 'styled-components'
import { Pagination } from 'antd'

export const PaginationStyled = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding: 0 0 1rem 0;

  .ant-pagination-item a {
    color: ${({ theme }) => theme.secondary};
  }

  .ant-pagination-item-active a {
    color: ${({ theme }) => theme.black};
  }

  .ant-pagination-item-link {
    color: ${({ theme }) => theme.secondary};
  }
`
