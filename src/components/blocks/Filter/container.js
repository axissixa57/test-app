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
}) => {
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

  const handleChange = e => {
    const { filterName, val } = e.target

    if (e.target.checked) {
      filterName === 'tags' && setTagGood(val)
      filterName === 'size' && setSizeGood(val)
      filterName === 'color' && setColorGood(val)

      fetchfilteredGoods(filterName, val)
    } else {
      filterName === 'tags' && deleteTagGood(val)
      filterName === 'size' && deleteSizeGood(val)
      filterName === 'color' && deleteColorGood(val)

      fetchfilteredGoods(filterName, val)
    }
  }

  return (
    <Filter
      types={types}
      sizes={sizes}
      colors={colors}
      onChange={handleChange}
      fetchfilteredGoods={fetchfilteredGoods} />
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
}

export default connect(
  ({ goods }) => ({ goods: goods.filtredItems }),
  goodsActions,
)(FilterContainer)
