import React from 'react'
import { Card, Rate, Button, Skeleton } from 'antd'
import { NavLink } from 'react-router-dom'
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

const Catalog = ({
  goods,
  currentPage,
  totalCount,
  onChangePage,
  isLoading,
}) => {
  return (
    <SectionCatalog>
      <OrderDiv>
        <Order />
      </OrderDiv>
      <PaginationBlock
        current={currentPage}
        total={totalCount}
        pageSize={8}
        size="small"
        onChange={onChangePage} />
      <Goods>
        {goods &&
          goods.map(item => {
            return (
              <Column
                key={item._id.$oid} xs={24} sm={24} md={12}
                lg={8} xl={6}
              >
                <Skeleton
                  active
                  loading={isLoading}
                  avatar={{ shape: 'square' }}
                  title={false}
                  paragraph={false}
                >
                  <NavLink to={`/product/${item._id.$oid}`}>
                    <CardComponent
                      hoverable
                      cover={<img alt={item.title} src={item.images[0]} />}
                    >
                      <PriceHeader>
                        <span>{item.price + '$'}</span>
                        <Icons>
                          <Button type="link" shape="circle" icon="heart" />
                          <Button
                            type="link"
                            shape="circle"
                            icon="shopping-cart" />
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
                      <div>
                        {item.size.map(size => (
                          <span key={size}>{size + ' '}</span>
                        ))}
                      </div>
                    </CardComponent>
                  </NavLink>
                </Skeleton>
              </Column>
            )
          })}
      </Goods>
      <PaginationBlock
        current={currentPage}
        total={totalCount}
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
  currentPage: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Catalog
