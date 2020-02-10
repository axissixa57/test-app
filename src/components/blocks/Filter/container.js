import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Filter from './component'
import { goodsActions } from '@/actions/'

const FilterContainer = ({ currentPage, fetchFiltredGoods }) => {
  const [buttonValue, setButtonValue] = useState('Sorting by')

  const handleChangeFilter = val => {
    const sort = val.key

    const minValue = (currentPage - 1) * 8
    const maxValue = currentPage * 8

    if (sort === 'rating') {
      fetchFiltredGoods(sort, 'desc', minValue, maxValue)
      setButtonValue('Sort by: popularity')
    } else if (sort === 'priceAsc') {
      fetchFiltredGoods('price', 'asc', minValue, maxValue)
      setButtonValue('Sort by: cheaper')
    } else if (sort === 'priceDesc') {
      fetchFiltredGoods('price', 'desc', minValue, maxValue)
      setButtonValue('Sort by: expensive')
    }
  }

  return <Filter onChangeFilter={handleChangeFilter} buttonValue={buttonValue} />
}

FilterContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  fetchFiltredGoods: PropTypes.func.isRequired,
}

export default connect(
  ({ pagination }) => ({
    currentPage: pagination.currentPage,
  }),
  goodsActions,
)(FilterContainer)
