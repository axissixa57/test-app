import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Userbar from './component'
import { themeActions, internationalizationActions } from '@/actions'

const UserbarContainer = ({ switchDarkMode, changeLanguage }) => {
  const handleClickLang = e => changeLanguage(e.key)
  return (
    <Userbar
      switchDarkMode={switchDarkMode}
      onHandleClickLang={handleClickLang} />
  )
}

UserbarContainer.propTypes = {
  switchDarkMode: PropTypes.func,
  changeLanguage: PropTypes.func,
}

export default connect(null, {
  ...themeActions,
  ...internationalizationActions,
})(UserbarContainer)
