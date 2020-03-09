import React from 'react'
import { Menu, Dropdown, Button, Icon } from 'antd'
import PropTypes from 'prop-types'

import { Basket, ButtonLogin, ButtonBulb } from './styles'

const UserBar = ({ switchDarkMode, onHandleClickLang }) => {
  const menu = (
    <Menu>
      <Menu.Item key="en" onClick={onHandleClickLang}>EN</Menu.Item>
      <Menu.Item key="ru" onClick={onHandleClickLang}>RU</Menu.Item>
    </Menu>
  )

  return (
    <div className="userbar">
      <Basket>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonBulb onClick={switchDarkMode}>
          <Icon type="bulb" />
        </ButtonBulb>
        <Dropdown overlay={menu} placement="bottomCenter">
          <Button>
            <Icon type="global" />
          </Button>
        </Dropdown>
      </Basket>
    </div>
  )
}

UserBar.propTypes = {
  switchDarkMode: PropTypes.func,
  onHandleClickLang: PropTypes.func,
}

export default UserBar
