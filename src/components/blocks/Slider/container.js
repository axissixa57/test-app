import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Slider from './component'
import { goodsActions } from '@/actions/'

const SliderContainer = ({ priceRangeGoods }) => {

  const handleChange = () => {

  }

  return <Slider onChange={handleChange} />
}

SliderContainer.propTypes = {

}

export default connect(
  ({ goods }) => ({
    priceRangeGoods: goods.priceRangeGoods,
  }),
  goodsActions,
)(SliderContainer)
