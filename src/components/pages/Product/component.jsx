import React from 'react'
import { Layout, Row, Col, Rate, Card } from 'antd'
import PropTypes from 'prop-types'

import { Header } from '@/components/blocks/'
import { Main } from '@/theme/globalStyle'
import {} from './styles'

const { Meta } = Card

const Product = () => {
  // id из url (/product/123 -> 123)
  // const id = props.match.params.id

  return (
    <Layout>
      <Header />
      <Main>
        <div
          className="product-page"
          style={{ padding: '1rem', height: '100%' }}
        >
          <Row>
            <div className="first-horizontal">
              <span className="name">
                <b>Polo red</b>
              </span>
            </div>
            <div
              className="second-horizontal"
              style={{ display: 'flex', textAlign: 'center' }}
            >
              <div className="article" style={{ lineHeight: '2.5' }}>
                Acrticle: 1117012
              </div>
              <Rate disabled allowHalf defaultValue={4.5} />
            </div>
          </Row>
          {/* <Row>
            <div className="card-left" style={{ width: '44%' }}>
              <div className="photo">
                <img
                  src="https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg"
                  alt="Polo red"
                  style={{ width: '80%' }}
                />
              </div>
            </div>
            <div className="card-right" style={{ width: '56%' }}></div>
          </Row> */}
          {/* <Row>
            <div style={{ display: 'flex', flexWrap: 'wrap', height: '100%' }}>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>

              </Col>
            </div>
          </Row> */}
          <div>
            <Row gutter={16}>
              <Col span={9}>
                <Card style={{ textAlign: 'center' }} bordered={false}>
                  <img
                    src="https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg"
                    alt="Polo red"
                    style={{ width: '90%' }} />
                </Card>
              </Col>
              <Col span={15}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
          <Row />
        </div>
      </Main>
    </Layout>
  )
}

Product.propTypes = {}

export default Product
