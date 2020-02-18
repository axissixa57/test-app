import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Product from './component'
import { productActions } from '@/actions/'

const ProductContainer = ({ match, product, isLoading, fetchProductById }) => {
  const { id } = match.params

  useEffect(() => {
    fetchProductById(id)
  }, [id])

  return product && <Product product={product} isLoading={isLoading} />
}

ProductContainer.defaultProps = {
  product: null,
}

ProductContainer.propTypes = {
  match: PropTypes.object.isRequired,
  product: PropTypes.object,
  fetchProductById: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default connect(
  ({ product }) => ({ product: product.data, isLoading: product.isLoading }),
  productActions,
)(ProductContainer)
