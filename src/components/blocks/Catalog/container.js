import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import Catalog from './component'
import { goodsActions, paginationActions, productActions } from '@/actions/'
import { sortGoods } from '@/helpers/'

const CatalogContainer = ({
  goods,
  currentPage,
  totalCount,
  filterName,
  fetchPartGoods,
  fetchSortedGoods,
  fetchfilteredGoods,
  filterBySeveralParams,
  changeCurrentPage,
  deleteProductData,
  isLoading,
  history,
  location,
}) => {
  useEffect(() => {
    const url = `${location.pathname}${location.search}`
    if (url.includes('data')) {
      filterBySeveralParams(url.substr(6))
    } else {
      fetchPartGoods(0, 8)
      deleteProductData() // because ImageSlider don't render correct images with last images received
    }
  }, [])

  const handleChangePage = page => {
    changeCurrentPage(page)
    sortGoods(page, filterName, fetchfilteredGoods, fetchSortedGoods)
  }

  return (
    <Catalog
      goods={goods}
      currentPage={currentPage}
      totalCount={totalCount}
      onChangePage={handleChangePage}
      isLoading={isLoading}
    />
  )
}

CatalogContainer.propTypes = {
  goods: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  filterName: PropTypes.string.isRequired,
  fetchPartGoods: PropTypes.func.isRequired,
  fetchSortedGoods: PropTypes.func.isRequired,
  fetchfilteredGoods: PropTypes.func.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  deleteProductData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default compose(
  connect(
    ({ goods, pagination }) => ({
      goods: goods.filtredItems.length ? goods.filtredItems : goods.items,
      filterName: goods.filterName,
      totalCount: goods.totalCount,
      isLoading: goods.isLoading,
      currentPage: pagination.currentPage,
    }),
    { ...goodsActions, ...paginationActions, ...productActions },
  ),
  withRouter,
)(CatalogContainer)
