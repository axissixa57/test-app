import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Order from './component'
import { goodsActions } from '@/actions/'
import { sortGoods } from '@/helpers/'

const OrderContainer = ({ currentPage, fetchSortedGoods }) => {
  const [buttonValue, setButtonValue] = useState('Sorting by')

  const handleChangeFilter = val => {
    sortGoods(currentPage, val.key, null, fetchSortedGoods, setButtonValue)
  }

  return <Order onChangeFilter={handleChangeFilter} buttonValue={buttonValue} />
}

OrderContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  fetchSortedGoods: PropTypes.func.isRequired,
}

export default connect(
  ({ pagination }) => ({
    currentPage: pagination.currentPage,
  }),
  goodsActions,
)(OrderContainer)
