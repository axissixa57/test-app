import styled, { css } from 'styled-components'
import { Col, Card, Tag, Pagination } from 'antd'

export const SectionCatalog = styled.div`
  padding: 1rem;
`
export const OrderDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 0px 2rem 1rem;
`
export const PaginationBlock = styled(Pagination)`
  display: flex;
  justify-content: center;

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

export const Goods = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`

export const Column = styled(Col)`
  .ant-card-cover {
    img {
      padding: 0.5rem;
    }
  }

  .ant-card-body {
    padding: 1rem;

    div:first-child > span {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  .ant-card-meta-description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .ant-skeleton-avatar-square {
    height: 35rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const CardComponent = styled(Card)`
  margin: 0px 5px;
  margin-bottom: 1rem;
`

export const Tags = styled.div`
  height: 5rem;
  margin-top: 0.5rem;
`

export const PriceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
`

export const Icons = styled.div`
  button {
    font-size: 1.4rem;
  }
`

export const StyledTag = styled(Tag)`
  margin-bottom: 0.5rem;
  ${props =>
    props.color === 'white' &&
    css`
      border: 1px solid black;
      color: black;
    `};
`
