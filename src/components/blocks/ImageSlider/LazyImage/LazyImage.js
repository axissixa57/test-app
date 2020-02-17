import React, { useEffect } from 'react'
import { withLazyImageContext } from './LazyImageContext'
import './lazyImage.css'

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  useEffect(() => {
    if (lazyLoad) lazyLoad.update()
  }, [src, aspectRatio, lazyLoad])

  return (
    <div className="lazyImage" style={{ paddingTop: '100%' }}>
      <img className="lazyImage__img" data-src={src} />
    </div>
  )
}

export default withLazyImageContext(LazyImage)
