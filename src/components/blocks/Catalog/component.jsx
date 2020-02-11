import React from 'react'
import { Card, Rate, Button } from 'antd'
import PropTypes from 'prop-types'

import { Order } from '@/components/blocks/'
import {
  SectionCatalog,
  OrderDiv,
  PaginationBlock,
  Goods,
  Column,
  CardComponent,
  PriceHeader,
  Icons,
  Tags,
  StyledTag,
} from './styles'

const { Meta } = Card

const Catalog = ({ goods, onChangePage }) => {
  return (
    <SectionCatalog>
      <OrderDiv>
        <Order />
      </OrderDiv>
      <Goods>
        {goods.map(item => {
          return (
            <Column
              key={item._id.$oid} xs={24} sm={24} md={12}
              lg={8} xl={6}
            >
              <CardComponent
                hoverable
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
                  {item.color.map(color => (
                    <StyledTag color={color} key={color}>
                      {color.toUpperCase()}
                    </StyledTag>
                  ))}
                </Tags>
              </CardComponent>
            </Column>
          )
        })}
      </Goods>
      {/* http://localhost:3001/data?_page=1 - в headers: s-Total-Count вернёт общее кол-во */}
      <PaginationBlock
        defaultCurrent={1}
        total={34}
        pageSize={8}
        size="small"
        onChange={onChangePage} />
    </SectionCatalog>
  )
}

Catalog.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string,
      }),
      title: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string),
      color: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  onChangePage: PropTypes.func.isRequired,
}

export default Catalog
