import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { goodsActions } from '@/actions'
import { queryToUrl } from '@/helpers'
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
  history,
  location,
  tagsGoods,
  sizeGoods,
  colorGoods,
  page,
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
      queryToUrl.updatePage(page, location, history)
      queryToUrl.add(filterName, val, location, history)

      filterName === 'tags' && setTagGood(val)
      filterName === 'size' && setSizeGood(val)
      filterName === 'color' && setColorGood(val)

      fetchfilteredGoods()
    } else {
      queryToUrl.updatePage(page, location, history)
      queryToUrl.delete(filterName, val, location, history)

      filterName === 'tags' && deleteTagGood(val)
      filterName === 'size' && deleteSizeGood(val)
      filterName === 'color' && deleteColorGood(val)

      fetchfilteredGoods()
    }
  }

  const handleChangeFromRangeInput = e => {
    const fromValueRange = +e.target.value

    queryToUrl.updatePage(page, location, history)
    queryToUrl.updatePrice(fromValueRange, max, location, history)

    changePriceRangeGoods([fromValueRange, max])
    fetchfilteredGoods()
  }

  const handleChangeToRangeInput = e => {
    const toValueRange = +e.target.value

    queryToUrl.updatePage(page, location, history)
    queryToUrl.updatePrice(min, toValueRange, location, history)

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
      max={max}
      tagsGoods={tagsGoods}
      sizeGoods={sizeGoods}
      colorGoods={colorGoods} />
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  tagsGoods: PropTypes.arrayOf(PropTypes.string),
  sizeGoods: PropTypes.arrayOf(PropTypes.string),
  colorGoods: PropTypes.arrayOf(PropTypes.string),
  page: PropTypes.number.isRequired,
}

export default compose(
  connect(
    ({ goods, pagination }) => ({
      goods: goods.filtredItems,
      tagsGoods: goods.tagsGoods,
      sizeGoods: goods.sizeGoods,
      colorGoods: goods.colorGoods,
      range: goods.priceRangeGoods,
      page: pagination.currentPage,
    }),
    goodsActions,
  ),
  withRouter,
)(FilterContainer)
