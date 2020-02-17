import React from 'react'
import { Layout, Row, Col, Rate, Card, Button } from 'antd'
import PropTypes from 'prop-types'

import { Header, ImageSlider } from '@/components/blocks/'
import { Main } from '@/theme/globalStyle'
import {
  StyledRow,
  StyledFirstHorizontal,
  StyledSecondHorizontal,
  StyledCards,
  StyledRightCard,
} from './styles'

const ButtonGroup = Button.Group

const Product = ({ product }) => {
  const {
    title,
    _id: { $oid: id },
    price,
    size,
    images,
    rating,
    description,
    color,
  } = product

  return (
    <Layout>
      <Header />
      <Main>
        <div className="product-page">
          <StyledRow>
            <StyledFirstHorizontal>
              <span className="name">{title}</span>
            </StyledFirstHorizontal>
            <StyledSecondHorizontal>
              <div className="article">
                Acrticle: <span className="article-code">{id}</span>
              </div>
              <Rate disabled allowHalf defaultValue={rating} />
            </StyledSecondHorizontal>
          </StyledRow>

          <StyledCards>
            <Row gutter={16}>
              <Col
                span={12} xs={24} sm={24} md={24}
                lg={12}
              >
                <Card bordered={false}>
                  <ImageSlider images={images} />
                </Card>
              </Col>
              <Col
                span={12} xs={24} sm={24} md={24}
                lg={12}
              >
                <StyledRightCard bordered={false}>
                  <div className="cost">{`${price}$`}</div>
                  <div className="color">
                    Color:{' '}
                    {color.map((c, i) => {
                      return color.length - 1 === i ? (
                        <span key={c}>{`${c}`}</span>
                      ) : (
                        <span key={c}>{`${c}, `}</span>
                      )
                    })}
                  </div>
                  <div className="description">{description}</div>
                  <div className="table-sizes">
                    <span>Table sizes</span>
                    <ButtonGroup>
                      {size.map(s => (
                        <Button key={s}>{s}</Button>
                      ))}
                    </ButtonGroup>
                  </div>
                  <div className="order">
                    <Button type="danger" block style={{ width: '210px' }}>
                      Add to cart
                    </Button>
                  </div>
                </StyledRightCard>
              </Col>
            </Row>
          </StyledCards>
        </div>
      </Main>
    </Layout>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.shape({
      $oid: PropTypes.string,
    }),
    title: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    rating: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default Product
