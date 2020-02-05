import React from 'react'
import { Row, Col, Card, Rate, Tag, Button } from 'antd'
import styled from 'styled-components'

const SectionCatalog = styled.div`
  padding: 1rem;
`

const RowComponent = styled(Row)`
  display: flex;
  flex-flow: row wrap;

  .ant-card-cover {
    img {
      padding: 0.5rem;
    }
  }

  .ant-card-body {
    padding: 1rem;

    div:first-child > span {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  .ant-card-meta-description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

const Tags = styled.div`
  margin-top: 0.5rem;
`

const PriceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
`

const Icons = styled.div`
  button {
    font-size: 1.4rem;
  }
`

const { Meta } = Card

const Catalog = () => (
  <SectionCatalog>
    <RowComponent>
      <Col
        xs={24} sm={24} md={12} lg={12}
        xl={6}
      >
        <Card
          hoverable
          style={{ width: 240, marginBottom: '1rem' }}
          cover={
            <img
              alt="example"
              src="https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg" />
          }
        >
          <PriceHeader>
            <span>5$</span>
            <Icons>
              <Button type="link" shape="circle" icon="heart" />
              <Button type="link" shape="circle" icon="shopping-cart" />
            </Icons>
          </PriceHeader>
          <Meta
            title="Polo red"
            description="uspendisse nisi erat, elementum nec mollis ut, dignissim" />
          <Rate disabled allowHalf defaultValue={3.5} />
          <Tags>
            <Tag color="red" key="red">
              {'red'.toUpperCase()}
            </Tag>
          </Tags>
        </Card>
      </Col>
      <Col
        xs={24} sm={24} md={12} lg={12}
        xl={6}
      >
        <Card
          hoverable
          style={{ width: 240, marginBottom: '1rem' }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col
        xs={24} sm={24} md={12} lg={12}
        xl={6}
      >
        <Card
          hoverable
          style={{ width: 240, marginBottom: '1rem' }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col
        xs={24} sm={24} md={12} lg={12}
        xl={6}
      >
        <Card
          hoverable
          style={{ width: 240, marginBottom: '1rem' }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
    </RowComponent>
  </SectionCatalog>
)

export default Catalog
