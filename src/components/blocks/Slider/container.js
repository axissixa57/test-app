import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Slider from './component'
import { goodsActions } from '@/actions/'

const SliderContainer = ({
  priceRangeGoods,
  changePriceRangeGoods,
  fetchfilteredGoods,
}) => {
  const handleChange = range => {
    changePriceRangeGoods(range)
    fetchfilteredGoods()
  }

  return <Slider onChange={handleChange} priceRange={priceRangeGoods} />
}

SliderContainer.propTypes = {
  priceRangeGoods: PropTypes.array.isRequired,
  changePriceRangeGoods: PropTypes.func.isRequired,
  fetchfilteredGoods: PropTypes.func.isRequired,
}

export default connect(
  ({ goods }) => ({
    priceRangeGoods: goods.priceRangeGoods,
  }),
  goodsActions,
)(SliderContainer)
