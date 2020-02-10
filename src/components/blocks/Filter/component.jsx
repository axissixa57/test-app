import React from 'react'
import { Checkbox, Input } from 'antd'
import PropTypes from 'prop-types'

import { FilterWrapper } from './styles'

const Filter = () => {
  function onChange (e) {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <FilterWrapper>
      <div className="filtr-product-type">
        <p>Product type</p>
        <div>
          <Checkbox onChange={onChange}>Polos</Checkbox>
          <Checkbox onChange={onChange}>Pants</Checkbox>
          <Checkbox onChange={onChange}>Shirts</Checkbox>
          <Checkbox onChange={onChange}>Jackets</Checkbox>
          <Checkbox onChange={onChange}>Dresses</Checkbox>
          <Checkbox onChange={onChange}>Cardigans</Checkbox>
          <Checkbox onChange={onChange}>Tops</Checkbox>
          <Checkbox onChange={onChange}>Trench Coats</Checkbox>
        </div>
      </div>
      <div className="filtr-product-size">
        <p>Product size</p>
        <div>
          <Checkbox onChange={onChange}>XS</Checkbox>
          <Checkbox onChange={onChange}>S</Checkbox>
          <Checkbox onChange={onChange}>M</Checkbox>
          <Checkbox onChange={onChange}>L</Checkbox>
          <Checkbox onChange={onChange}>XL</Checkbox>
        </div>
      </div>
      <div className="filtr-product-color">
        <p>Product color</p>
        <div>
          <Checkbox onChange={onChange}>blue</Checkbox>
          <Checkbox onChange={onChange}>green</Checkbox>
          <Checkbox onChange={onChange}>yellow</Checkbox>
          <Checkbox onChange={onChange}>orange</Checkbox>
          <Checkbox onChange={onChange}>red</Checkbox>
          <Checkbox onChange={onChange}>brown</Checkbox>
          <Checkbox onChange={onChange}>purple</Checkbox>
        </div>
      </div>
      <div className="filtr-product-cost">
        <p>Product cost</p>
        <div>
          <Input
            type="number"
            placeholder="от"
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange} />
          <Input
            type="number"
            placeholder="до"
            formatter={value =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange} />
        </div>
      </div>
    </FilterWrapper>
  )
}

Filter.propTypes = {}

export default Filter
