import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import PropTypes from 'prop-types'

import Carousel from './Carousel/Carousel'
import { LazyImageProvider } from './LazyImage/LazyImageContext'
import LazyImage from './LazyImage/LazyImage'

const images = [
  'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg',
  'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952674675109.jpg',
  'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952389433115.jpg',
  'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952939170654.jpg',
]

const ImageSlider = () => {
  return (
    <LazyImageProvider>
      <Carousel images={images}>
        {images.map((image, i) => (
          <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
        ))}
      </Carousel>
    </LazyImageProvider>
  )
}

ImageSlider.propTypes = {}

export default ImageSlider
