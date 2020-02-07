import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Catalog from './component'
import { goodsActions } from '@/actions/'

const CatalogContainer = ({ goods, quantityOfGoods, fetchPartGoods }) => {
  useEffect(() => {
    fetchPartGoods(0, 8)
  }, [])

  const handleChangePage = page => {
    const minValue = (page - 1) * 8
    const maxValue = page * 8

    fetchPartGoods(minValue, maxValue)
  }

  return <Catalog goods={goods} quantityOfGoods={quantityOfGoods} onChangePage={handleChangePage} />
}

CatalogContainer.propTypes = {
  goods: PropTypes.array,
  // quantityOfGoods: PropTypes.number,
  fetchPartGoods: PropTypes.func,
}

export default connect(
  ({ goods }) => ({
    goods: goods.items,
    quantityOfGoods: goods.quantityOfGoods,
  }),
  goodsActions,
)(CatalogContainer)
