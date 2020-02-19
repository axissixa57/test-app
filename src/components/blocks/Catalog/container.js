import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { parse } from 'query-string'

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
  location,
  resetFiltersAndSort,
}) => {
  useEffect(() => {
    const url = `${location.pathname}${location.search}`

    if (url.includes('data')) {
      const truncatedUrl = url.substr(6)
      const parsed = parse(truncatedUrl)

      const {
        color_like: colors = [],
        size_like: sizes = [],
        tags_like: tags = [],
        price_gte: min = 0,
        price_lte: max = 110,
        _sort: sort = '',
        _order: order = '',
      } = parsed

      const objectWithFilters = {
        colors,
        sizes,
        tags,
        min,
        max,
        sort,
        order,
      }

      filterBySeveralParams(truncatedUrl, objectWithFilters)
    } else {
      resetFiltersAndSort()
      fetchPartGoods(0, 8)
      // because ImageSlider don't render correct images with last images received
      deleteProductData()
    }
  }, [location.pathname])

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
      isLoading={isLoading} />
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
  filterBySeveralParams: PropTypes.func.isRequired,
  resetFiltersAndSort: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
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
