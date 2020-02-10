import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

import { Basket, UserBarStyled, ButtonLogin, ButtonBulb } from './styles'

const UserBar = ({ switchDarkMode }) => {
  return (
    <UserBarStyled>
      <Basket>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonBulb onClick={switchDarkMode}>
          <Icon type="bulb" />
        </ButtonBulb>
      </Basket>
    </UserBarStyled>
  )
}

UserBar.propTypes = {
  switchDarkMode: PropTypes.func,
}

export default UserBar
