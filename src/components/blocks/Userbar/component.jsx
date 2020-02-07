import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

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

UserBar.propTypes = {
  darkMode: PropTypes.func,
}

export default UserBar
