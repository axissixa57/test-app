import React from 'react'
import { Layout, Row, Col, Rate, Card, Button } from 'antd'
import PropTypes from 'prop-types'

import { Header } from '@/components/blocks/'
import { Main } from '@/theme/globalStyle'
import {
  StyledRow,
  StyledFirstHorizontal,
  StyledSecondHorizontal,
  StyledCards,
  StyledCardPicture,
  StyledRightCard,
} from './styles'

const ButtonGroup = Button.Group

const Product = () => {
  // id из url (/product/123 -> 123)
  // const id = props.match.params.id

  return (
    <Layout>
      <Header />
      <Main>
        <div className="product-page">
          <StyledRow>
            <StyledFirstHorizontal>
              <span className="name">Polo red</span>
            </StyledFirstHorizontal>
            <StyledSecondHorizontal>
              <div className="article">
                Acrticle: <span className="article-code">1117012</span>
              </div>
              <Rate disabled allowHalf defaultValue={4.5} />
            </StyledSecondHorizontal>
          </StyledRow>

          <StyledCards>
            <Row gutter={16}>
              <Col span={9} xs={24} sm={24} md={24} lg={9}>
                <Card
                  bordered={false}
                  cover={
                    <StyledCardPicture
                      alt="example"
                      src="https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg"
                    />
                  }
                >
                  Slider
                </Card>
              </Col>
              <Col span={15} xs={24} sm={24} md={24} lg={15}>
                <StyledRightCard bordered={false}>
                  <div className="cost">50$</div>
                  <div className="color">
                    Color: <span>red</span>
                  </div>
                  <div className="description">
                    uspendisse nisi erat, elementum nec mollis ut, dignissim sit
                    amet eros. Cras venenatis erat sit amet eros fer mentum
                    malesuada. Sed lobortis mi neque, id aliquam massa consequat
                    quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a
                    nisi. Nullam bibendum ultrices quam, in faucibus lectus
                    faucibus et. Proin tincidunt diam mattis arcu vulputate, ac
                    posuere ero s fringilla. Aenean justo ante, iaculis id
                    suscipit id, lobortis sit amet neque. Vestibulum rhoncus
                    risus vitae tortor dictum, at fini bus ex convallis.
                    Pellentesque venenatis libero in enim mattis cursus. Mauris
                    pretium magna nisi, et pharetra felis elementum sit amet. N
                    ullam ornare condimentum tortor condimentum volutpat.
                    Suspendisse eget mattis nulla, sit amet venenatis magna. Sed
                    pulvinar nunc quam, nec port titor eros accumsan id. Ut
                    sapien ante, dignissim sed dapibus vitae, temp
                  </div>
                  <div className="table-sizes">
                    <span>Table sizes</span>
                    <ButtonGroup>
                      <Button>XL</Button>
                      <Button>L</Button>
                      <Button>M</Button>
                      <Button>S</Button>
                      <Button>XS</Button>
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

Product.propTypes = {}

export default Product
