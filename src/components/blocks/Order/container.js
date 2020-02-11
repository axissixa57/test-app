import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Order from './component'
import { goodsActions } from '@/actions/'

const OrderContainer = ({ currentPage, fetchSortedGoods }) => {
  const [buttonValue, setButtonValue] = useState('Sorting by')

  const handleChangeFilter = val => {
    const sort = val.key

    const minValue = (currentPage - 1) * 8
    const maxValue = currentPage * 8

    if (sort === 'rating') {
      fetchSortedGoods(sort, 'desc', minValue, maxValue)
      setButtonValue('Sort by: popularity')
    } else if (sort === 'priceAsc') {
      fetchSortedGoods('price', 'asc', minValue, maxValue)
      setButtonValue('Sort by: cheaper')
    } else if (sort === 'priceDesc') {
      fetchSortedGoods('price', 'desc', minValue, maxValue)
      setButtonValue('Sort by: expensive')
    }
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
