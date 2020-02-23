import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import Slider from './component'
import { goodsActions } from '@/actions/'
import { queryToUrl } from '@/helpers'

const SliderContainer = ({
  priceRangeGoods,
  changePriceRangeGoods,
  fetchfilteredGoods,
  location,
  history,
}) => {
  const handleChange = range => {
    queryToUrl.updatePrice(range[0], range[1], location, history)

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
