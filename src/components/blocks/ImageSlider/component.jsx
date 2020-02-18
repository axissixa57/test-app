import React from 'react'
import PropTypes from 'prop-types'

import Carousel from './Carousel/Carousel'
import { LazyImageProvider } from './LazyImage/LazyImageContext'
import LazyImage from './LazyImage/LazyImage'

const ImageSlider = ({ images }) => {
  return (
    <LazyImageProvider>
      <Carousel images={images}>
        {images.map(image => (
          <LazyImage key={image} aspectRatio={[10, 7]} src={image} />
        ))}
      </Carousel>
    </LazyImageProvider>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}

export default ImageSlider
