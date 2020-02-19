import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { stringify, parse } from 'query-string'

import Order from './component'
import { goodsActions } from '@/actions/'
import { sortGoods } from '@/helpers/'

const OrderContainer = ({
  currentPage,
  fetchSortedGoods,
  location,
  history,
  sortName,
}) => {
  const handleChangeFilter = val => {
    let sortName = val.key
    let order = 'desc'

    if (sortName === 'priceAsc') {
      sortName = 'price'
      order = 'asc'
    } else if (sortName === 'priceDesc') {
      sortName = 'price'
    }

    // ====================== вынести в другой файл ===============================
    const parsed = parse(location.search)

    if ('_sort' in parsed) {
      parsed._sort = sortName
      parsed._order = order

      const stringified = stringify(parsed)

      history.push(`data?${stringified}`)
    } else {
      const stringified = stringify({ _sort: sortName, _order: order })

      location.search = !location.search
        ? `data?${stringified}`
        : `${location.search}&${stringified}`

      history.push(location.search)
    }
    // =====================================================

    sortGoods(currentPage, val.key, null, fetchSortedGoods)
  }

  return <Order onChangeFilter={handleChangeFilter} sortName={sortName} />
}

OrderContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  fetchSortedGoods: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  sortName: PropTypes.string.isRequired,
}

export default compose(
  connect(
    ({ pagination, goods }) => ({
      currentPage: pagination.currentPage,
      sortName: goods.filterName,
    }),
    goodsActions,
  ),
  withRouter,
)(OrderContainer)
