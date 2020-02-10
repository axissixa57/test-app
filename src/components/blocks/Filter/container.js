import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Filter from './component'

const FilterContainer = () => {
  return <Filter />
}

FilterContainer.propTypes = {

}

export default connect(null, null)(FilterContainer)
