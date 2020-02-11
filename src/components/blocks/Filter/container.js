import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { goodsActions } from '@/actions'
import Filter from './component'

const FilterContainer = ({
  goods,
  fetchfilteredGoods,
  deletePartFilteredItems,
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
  const colors = ['blue', 'green', 'yellow', 'orange', 'red', 'brown', 'purple']

  const handleChange = e => {
    const { filterName, val } = e.target

    if (e.target.checked) {
      fetchfilteredGoods(filterName, val)
    } else {
      const newGoods = goods.filter(
        good => !(good[filterName].indexOf(val) >= 0),
      )
      deletePartFilteredItems(newGoods)
    }
  }

  return (
    <Filter
      types={types}
      sizes={sizes}
      colors={colors}
      onChange={handleChange}
      fetchfilteredGoods={fetchfilteredGoods}
    />
  )
}

FilterContainer.propTypes = {
  goods: PropTypes.array.isRequired,
  fetchfilteredGoods: PropTypes.func.isRequired,
  deletePartFilteredItems: PropTypes.func.isRequired,
}

export default connect(
  ({ goods }) => ({ goods: goods.filtredItems }),
  goodsActions,
)(FilterContainer)
