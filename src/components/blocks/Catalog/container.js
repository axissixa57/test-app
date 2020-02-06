import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Catalog from './component'
import { goodsActions } from '@/actions/'

const CatalogContainer = ({ goods, fetchGoods }) => {
  useEffect(() => {
    fetchGoods()
  }, [])

  return <Catalog goods={goods} />
}

CatalogContainer.propTypes = {
  goods: PropTypes.array,
  fetchGoods: PropTypes.func,
}

export default connect(({ goods }) => ({
  goods: goods.filteredItems,
}), goodsActions)(CatalogContainer)
