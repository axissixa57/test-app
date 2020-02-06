import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Userbar from './component'
import { themeActions } from '@/actions'

const UserbarContainer = ({ darkMode }) => {
  return <Userbar darkMode={darkMode} />
}

UserbarContainer.propTypes = {}

export default connect(null, themeActions)(UserbarContainer)
