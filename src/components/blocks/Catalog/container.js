import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Catalog from './component'
import { goodsActions, paginationActions } from '@/actions/'

const CatalogContainer = ({
  goods,
  filterName,
  fetchPartGoods,
  fetchSortedGoods,
  changeCurrentPage,
}) => {
  useEffect(() => {
    fetchPartGoods(0, 8)
  }, [])

  const handleChangePage = page => {
    const minValue = (page - 1) * 8
    const maxValue = page * 8

    changeCurrentPage(page)

    if (!filterName) {
      fetchPartGoods(minValue, maxValue)
    } else if (filterName === 'rating') {
      fetchSortedGoods(filterName, 'desc', minValue, maxValue)
    } else if (filterName === 'priceAsc') {
      fetchSortedGoods('price', 'asc', minValue, maxValue)
    } else if (filterName === 'priceDesc') {
      fetchSortedGoods('price', 'desc', minValue, maxValue)
    }
  }

  return (
    <Catalog
      goods={goods}
      onChangePage={handleChangePage} />
  )
}

CatalogContainer.propTypes = {
  goods: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
  fetchPartGoods: PropTypes.func.isRequired,
  fetchSortedGoods: PropTypes.func.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
}

export default connect(
  ({ goods }) => ({
    goods: goods.filtredItems.length ? goods.filtredItems : goods.items,
    filterName: goods.filterName,
  }),
  { ...goodsActions, ...paginationActions },
)(CatalogContainer)
