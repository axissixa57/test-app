import styled from 'styled-components'
import EmblaCarouselReact from 'embla-carousel-react'

export const Carousel = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 60rem;
  width: 100%;
`

export const CarouselWrap = styled.div`
  background-color: #ffffff;
  position: relative;
`

export const CarouselViewport = styled(EmblaCarouselReact)`
  width: 100%;
  overflow: hidden;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }
`

export const CarouselContainer = styled.div`
  display: flex;
`

export const CarouselItem = styled.div`
  position: relative;
  background-color: #131313;
  flex: 0 0 80%;
`

export const CarouselArrowBtn = styled.button`
  background-color: transparent;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  width: 5rem;
  height: 5rem;
  padding: 0;
  border: 0;
  cursor: pointer;
  fill: #1bcacd;

  &:disabled {
    fill: #e9e9e9;
    opacity: 0.5;
  }

  &.carousel__arrowBtn--prev {
    left: calc(5% - 2.5rem);
  }

  &.carousel__arrowBtn--next {
    right: calc(5% - 2.5rem);
  }
`

export const CarouselArrowBtnSvg = styled.svg`
  width: 3.5rem;
  height: 3.5rem;
`

export const CarouselDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;

  img {
    cursor: pointer;
    margin-right: 0.5rem;
  }
`
