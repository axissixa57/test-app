import styled, { css } from 'styled-components'
import { Col, Card, Tag } from 'antd'

export const SectionCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1rem;
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
`

export const CardComponent = styled(Card)`
  width: 240px;
  margin: 0 auto;
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
