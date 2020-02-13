import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { goodsActions } from '@/actions'
import Filter from './component'

const FilterContainer = ({
  fetchfilteredGoods,
  setTagGood,
  deleteTagGood,
  setColorGood,
  deleteColorGood,
  setSizeGood,
  deleteSizeGood,
  range,
  changePriceRangeGoods,
}) => {
  const [min, max] = range
  const types = [
    'Polos',
    'Pants',
    'Shirts',
    'Jackets',
    'Dresses',
    'Cardigans',
    'Tops',
    'Trench Coats',
  ]
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const colors = [
    'blue',
    'green',
    'yellow',
    'orange',
    'pink',
    'red',
    'brown',
    'purple',
    'black',
    'grey',
    'white',
  ]

  const handleChangeCheckbox = e => {
    const { filterName, val } = e.target

    if (e.target.checked) {
      filterName === 'tags' && setTagGood(val)
      filterName === 'size' && setSizeGood(val)
      filterName === 'color' && setColorGood(val)

      fetchfilteredGoods()
    } else {
      filterName === 'tags' && deleteTagGood(val)
      filterName === 'size' && deleteSizeGood(val)
      filterName === 'color' && deleteColorGood(val)

      fetchfilteredGoods()
    }
  }

  const handleChangeFromRangeInput = e => {
    const fromValueRange = +e.target.value
    changePriceRangeGoods([fromValueRange, max])
    fetchfilteredGoods()
  }

  const handleChangeToRangeInput = e => {
    const toValueRange = +e.target.value
    changePriceRangeGoods([min, toValueRange])
    fetchfilteredGoods()
  }

  return (
    <Filter
      types={types}
      sizes={sizes}
      colors={colors}
      handleChangeCheckbox={handleChangeCheckbox}
      handleChangeFromRangeInput={handleChangeFromRangeInput}
      handleChangeToRangeInput={handleChangeToRangeInput}
      fetchfilteredGoods={fetchfilteredGoods}
      min={min}
      max={max} />
  )
}

FilterContainer.propTypes = {
  fetchfilteredGoods: PropTypes.func.isRequired,
  setTagGood: PropTypes.func.isRequired,
  deleteTagGood: PropTypes.func.isRequired,
  setColorGood: PropTypes.func.isRequired,
  deleteColorGood: PropTypes.func.isRequired,
  setSizeGood: PropTypes.func.isRequired,
  deleteSizeGood: PropTypes.func.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  changePriceRangeGoods: PropTypes.func.isRequired,
}

export default connect(
  ({ goods }) => ({ goods: goods.filtredItems, range: goods.priceRangeGoods }),
  goodsActions,
)(FilterContainer)
