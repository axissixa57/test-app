import React from 'react'
import PropTypes from 'prop-types'

import { PaginationStyled } from './styles'

const Pagination = ({ current, total, pageSize, size, onChange }) => {
  return (
    <PaginationStyled
      current={current}
      total={total}
      pageSize={pageSize}
      size={size}
      onChange={onChange} />
  )
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Pagination
