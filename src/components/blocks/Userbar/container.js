import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Userbar from './component'
import { themeActions } from '@/actions'

const UserbarContainer = ({ switchDarkMode }) => {
  return <Userbar switchDarkMode={switchDarkMode} />
}

UserbarContainer.propTypes = {
  switchDarkMode: PropTypes.func,
}

export default connect(null, themeActions)(UserbarContainer)
