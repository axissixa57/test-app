import React from 'react'
import { Slider } from 'antd'
import PropTypes from 'prop-types'

const SliderComponent = ({ priceRange, onChange }) => {
  return (
    <div>
      <Slider range value={priceRange} max={110} onChange={onChange} />
    </div>
  )
}

SliderComponent.propTypes = {
  priceRange: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SliderComponent
