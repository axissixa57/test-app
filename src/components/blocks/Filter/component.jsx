import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import PropTypes from 'prop-types'

const Filter = ({ onChangeFilter }) => {
  const menu = (
    <Menu>
      <Menu.Item key="rating" onClick={onChangeFilter}>
        Popular
      </Menu.Item>
      <Menu.Item key="priceAsc" onClick={onChangeFilter}>Cheap</Menu.Item>
      <Menu.Item key="priceDesc" onClick={onChangeFilter}>Expensive</Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>Sorting by</Button>
      </Dropdown>
    </>
  )
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

export default Filter
