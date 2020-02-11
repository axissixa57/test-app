import React from 'react'
import { Checkbox, Input } from 'antd'
import PropTypes from 'prop-types'

import { FilterWrapper } from './styles'

const Filter = ({ types, sizes, colors, onChange }) => {
  return (
    <FilterWrapper>
      <div className="filtr-product-type">
        <p>Product type</p>
        <div>
          {types.map(type => (
            <Checkbox
              key={type}
              filterName="tags"
              val={type}
              onChange={onChange}
            >
              {type}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="filtr-product-size">
        <p>Product size</p>
        <div>
          {sizes.map(size => (
            <Checkbox
              key={size}
              filterName="size"
              val={size}
              onChange={onChange}
            >
              {size}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="filtr-product-color">
        <p>Product color</p>
        <div>
          {colors.map(color => (
            <Checkbox
              key={color}
              filterName="color"
              val={color}
              onChange={onChange}
            >
              {color}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="filtr-product-cost">
        <p>Product cost</p>
        <div>
          <Input type="number" placeholder="от" onChange={onChange} />
          <Input type="number" placeholder="до" onChange={onChange} />
        </div>
      </div>
    </FilterWrapper>
  )
}

Filter.propTypes = {
  types: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter
