import React from 'react'
import { Slider } from 'antd'

const SliderComponent = () => {
  return (
    <div>
      <Slider range defaultValue={[20, 50]} max={110} />
    </div>
  )
}

export default SliderComponent
