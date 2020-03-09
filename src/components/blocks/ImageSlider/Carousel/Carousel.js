import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { PrevBtn, NextBtn, DotBtn } from './CarouselButtons'
import { Carousel, CarouselWrap, CarouselViewport, CarouselContainer, CarouselItem, CarouselDots } from './styles'

const EmblaCarouselComponent = ({ children, images }) => {
  const [carousel, initCarousel] = useState(null)
  const [prevBtnEnabled, togglePrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, toggleNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel])
  const scrollNext = useCallback(() => carousel.scrollNext(), [carousel])
  const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel])

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap())
      togglePrevBtnEnabled(carousel.canScrollPrev())
      toggleNextBtnEnabled(carousel.canScrollNext())
    }

    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList())
      carousel.on('select', onSelect)
      onSelect()
    }

    return () => {
      carousel && carousel.destroy()
    }
  }, [carousel])

  return (
    <Carousel>
      <CarouselWrap>
        <CarouselViewport
          emblaRef={initCarousel}
          options={{ loop: false }}
          htmlTagName="div"
        >
          <CarouselContainer>
            {children.map((Child, index) => {
              return (
                <CarouselItem key={index}>
                  {Child}
                </CarouselItem>
              )
            })}
          </CarouselContainer>
        </CarouselViewport>
        <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
      </CarouselWrap>
      <CarouselDots>
        {scrollSnaps.map((snap, index) => {
          return (
            <DotBtn
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              srcImg={images[index]} />
          )
        })}
      </CarouselDots>
    </Carousel>
  )
}

EmblaCarouselComponent.propTypes = {
  children: PropTypes.array.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default EmblaCarouselComponent
