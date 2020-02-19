import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { stringify, parse } from 'query-string'

import Slider from './component'
import { goodsActions } from '@/actions/'

const SliderContainer = ({
  priceRangeGoods,
  changePriceRangeGoods,
  fetchfilteredGoods,
  location,
  history,
}) => {
  const handleChange = range => {
    // ====================== вынести в другой файл ===============================
    const parsed = parse(location.search)

    if ('price_gte' in parsed || 'price_lte' in parsed) {
      location.search = location.search.replace(
        /&?price_gte=[0-9]{1,}&price_lte=[0-9]{1,}&?/,
        '',
      )
    }

    const stringified = stringify({ price_gte: range[0], price_lte: range[1] })

    location.search = !location.search
      ? `data?${stringified}`
      : `${location.search}&${stringified}`

    history.push(location.search)
    // =====================================================

    changePriceRangeGoods(range)
    fetchfilteredGoods()
  }

  return <Slider onChange={handleChange} priceRange={priceRangeGoods} />
}

SliderContainer.propTypes = {
  priceRangeGoods: PropTypes.array.isRequired,
  changePriceRangeGoods: PropTypes.func.isRequired,
  fetchfilteredGoods: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

export default compose(
  connect(
    ({ goods }) => ({
      priceRangeGoods: goods.priceRangeGoods,
    }),
    goodsActions,
  ),
  withRouter,
)(SliderContainer)
