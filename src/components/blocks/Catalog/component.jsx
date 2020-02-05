import React from 'react'
import { Row, Col, Card, Rate, Tag, Button } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SectionCatalog = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 1rem;
`

const RowComponent = styled(Row)`
  display: flex;
  flex-flow: row wrap;
`

const Column = styled(Col)`
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

const Catalog = ({ goods }) => {
  return (
    <SectionCatalog>
      {/* <RowComponent></RowComponent> */}
      {goods.map(item => {
        return (
          <Column key={item._id.$oid} xs={24} sm={24} md={12} lg={12} xl={6}>
            <Card
              hoverable
              style={{ width: 240, marginBottom: '1rem' }}
              cover={<img alt={item.title} src={item.images[0]} />}
            >
              <PriceHeader>
                <span>{item.price + '$'}</span>
                <Icons>
                  <Button type="link" shape="circle" icon="heart" />
                  <Button type="link" shape="circle" icon="shopping-cart" />
                </Icons>
              </PriceHeader>
              <Meta title={item.title} description={item.description} />
              <Rate disabled allowHalf defaultValue={item.rating} />
              <Tags>
                <Tag color={item.color} key={item.color}>
                  {item.color[0].toUpperCase()}
                </Tag>
              </Tags>
            </Card>
          </Column>
        )
      })}
    </SectionCatalog>
  )
}

Catalog.propTypes = {
  goods: PropTypes.array,
}

export default Catalog
