import React from 'react'
import { Button, Icon } from 'antd'

import { Basket, UserBarStyled } from './styles'

const UserBar = ({ darkMode }) => {
  return (
    <UserBarStyled>
      <Basket>
        <Button>Login</Button>
        <Button onClick={darkMode}>
          <Icon type="bulb" />
        </Button>
      </Basket>
    </UserBarStyled>
  )
}

export default UserBar
