import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { withLazyImageContext } from './LazyImageContext'
import { LazyImageStyled } from './styles'

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  useEffect(() => {
    if (lazyLoad) lazyLoad.update()
  }, [src, aspectRatio, lazyLoad])

  return (
    <LazyImageStyled style={{ paddingTop: '100%' }}>
      <img className="lazyImage__img" data-src={src} alt="" />
    </LazyImageStyled>
  )
}

LazyImage.defaultProps = {
  lazyLoad: null,
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  aspectRatio: PropTypes.arrayOf(PropTypes.number).isRequired,
  lazyLoad: PropTypes.object,
}

export default withLazyImageContext(LazyImage)
