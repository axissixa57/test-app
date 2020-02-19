import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

import { Basket, ButtonLogin, ButtonBulb } from './styles'

const UserBar = ({ switchDarkMode }) => {
  return (
    <div className="userbar">
      <Basket>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonBulb onClick={switchDarkMode}>
          <Icon type="bulb" />
        </ButtonBulb>
      </Basket>
    </div>
  )
}

UserBar.propTypes = {
  switchDarkMode: PropTypes.func,
}

export default UserBar
