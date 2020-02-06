import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

const ThemeProviderWrapper = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeProviderWrapper.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.object,
}

export default connect(({ theme }) => ({ theme: theme.backgroundColor }))(
  ThemeProviderWrapper,
)
