import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { stringify, parse } from 'query-string'

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
  history,
  location,
  tagsGoods,
  sizeGoods,
  colorGoods,
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

    // http://localhost:3001/data?tags_like=Polos&price_gte=0&price_lte=110&_start=0&_end=8

    if (e.target.checked) {
      // ====================== вынести в другой файл ===============================
      const stringified = stringify({ [`${filterName}_like`]: val })

      location.search = !location.search
        ? `data?${stringified}`
        : `${location.search}&${stringified}`

      history.push(location.search)
      // =====================================================

      filterName === 'tags' && setTagGood(val)
      filterName === 'size' && setSizeGood(val)
      filterName === 'color' && setColorGood(val)

      fetchfilteredGoods()
    } else {
      // ====================== вынести в другой файл ===============================
      const parsed = parse(location.search)

      if (`${filterName}_like` in parsed) {
        const filter = parsed[`${filterName}_like`]

        if (typeof filter === 'string') {
          parsed[`${filterName}_like`] = null
        } else if (Array.isArray(filter)) {
          parsed[`${filterName}_like`] = filter.filter(v => v !== val)
        }
      }

      const stringified = stringify(parsed, {
        skipNull: true,
      })

      history.push(`data?${stringified}`)
      // =====================================================

      filterName === 'tags' && deleteTagGood(val)
      filterName === 'size' && deleteSizeGood(val)
      filterName === 'color' && deleteColorGood(val)

      fetchfilteredGoods()
    }
  }

  const handleChangeFromRangeInput = e => {
    const fromValueRange = +e.target.value

    // ====================== вынести в другой файл ===============================
    const parsed = parse(location.search)

    if ('price_gte' in parsed || 'price_lte' in parsed) {
      location.search = location.search.replace(
        /&?price_gte=[0-9]{1,}&price_lte=[0-9]{1,}&?/,
        '',
      )
    }

    const stringified = stringify({ price_gte: fromValueRange, price_lte: max })

    location.search = !location.search
      ? `data?${stringified}`
      : `${location.search}&${stringified}`

    history.push(location.search)
    // =====================================================

    changePriceRangeGoods([fromValueRange, max])
    fetchfilteredGoods()
  }

  const handleChangeToRangeInput = e => {
    const toValueRange = +e.target.value

    // ====================== вынести в другой файл ===============================
    const parsed = parse(location.search)

    if ('price_gte' in parsed || 'price_lte' in parsed) {
      location.search = location.search.replace(
        /&?price_gte=[0-9]{1,}&price_lte=[0-9]{1,}&?/,
        '',
      )
    }

    const stringified = stringify({ price_gte: min, price_lte: toValueRange })

    location.search = !location.search
      ? `data?${stringified}`
      : `${location.search}&${stringified}`

    history.push(location.search)
    // =====================================================

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
}

export default compose(
  connect(
    ({ goods }) => ({
      goods: goods.filtredItems,
      tagsGoods: goods.tagsGoods,
      sizeGoods: goods.sizeGoods,
      colorGoods: goods.colorGoods,
      range: goods.priceRangeGoods,
    }),
    goodsActions,
  ),
  withRouter,
)(FilterContainer)
