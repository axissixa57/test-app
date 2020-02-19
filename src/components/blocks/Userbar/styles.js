import styled from 'styled-components'
import { Button } from 'antd'

export const Basket = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ButtonBulb = styled(Button)`
  background-color: ${({ theme }) => theme.bulb};

  &:hover,
  &:visited,
  &:focus {
    border-color: ${({ theme }) => theme.bulb};
    background-color: ${({ theme }) => theme.bulb};
    color: black;
  }
`
export const ButtonLogin = styled(Button)`
  margin-right: 0.5rem;

  span {
    color: black;
  }
`
