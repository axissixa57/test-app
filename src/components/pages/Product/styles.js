import styled from 'styled-components'
import { Row, Card } from 'antd'

export const StyledRow = styled(Row)`
  padding: 1rem 1rem 0 1rem;
`

export const StyledFirstHorizontal = styled(Row)`
  .name {
    color: #000;
    font-weight: 700;
    font-size: 36px;
  }
`

export const StyledSecondHorizontal = styled.div`
  display: flex;
  text-align: center;

  .article {
    margin-right: 1rem;
    line-height: 2.5;

    .article-code {
      color: #000;
    }
  }
`

export const StyledCards = styled.div`
  background: whitesmoke;
  padding: 1rem;

  .ant-card-cover {
    display: flex;
    justify-content: center;
  }
`

export const StyledCardPicture = styled.img`
  width: 77%;
`

export const StyledRightCard = styled(Card)`
  div {
    margin-bottom: 1rem;
  }

  .cost {
    color: #000;
    font-weight: 700;
    font-size: 36px;
  }

  .color span {
    color: #000;
  }

  .table-sizes {
    display: flex;
    flex-direction: column;

    .ant-btn-group {
      margin-top: 1rem;
    }
  }
`
