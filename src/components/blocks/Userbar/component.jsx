import React from 'react'
import { Icon } from 'antd'

import { Basket, UserBarStyled, ButtonLogin, ButtonBulb } from './styles'

const UserBar = ({ darkMode }) => {
  return (
    <UserBarStyled>
      <Basket>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonBulb onClick={darkMode}>
          <Icon type="bulb" />
        </ButtonBulb>
      </Basket>
    </UserBarStyled>
  )
}

export default UserBar
