import styled from 'styled-components'

export const FilterWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  overflow: auto;

  .filtr-product-type,
  .filtr-product-size,
  .filtr-product-color,
  .filtr-product-cost {
    p {
      font-weight: bold;
      color: ${({ theme }) => theme.secondary};
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: column;

      .ant-checkbox-wrapper {
        span + span {
          color: ${({ theme }) => theme.secondary};
        }
      }
    }

    .ant-checkbox-wrapper {
      margin: 0;
    }
  }

  .filtr-product-size,
  .filtr-product-color,
  .filtr-product-cost {
    margin-top: 1rem;
  }

  .filtr-product-cost {
    div {
      display: flex;
      flex-direction: row;
    }
  }
`
