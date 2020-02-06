import React from 'react'
import { Card, Rate, Button } from 'antd'
import PropTypes from 'prop-types'

import {
  SectionCatalog,
  Column,
  CardComponent,
  PriceHeader,
  Icons,
  Tags,
  StyledTag,
} from './styles'

const { Meta } = Card

const Catalog = ({ goods }) => {
  return (
    <SectionCatalog>
      {goods.map(item => {
        return (
          <Column key={item._id.$oid} xs={24} sm={24} md={12} lg={8} xl={6}>
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
    </SectionCatalog>
  )
}

Catalog.propTypes = {
  goods: PropTypes.array,
}

export default Catalog
