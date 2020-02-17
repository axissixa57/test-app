import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Search from './component'
import { goodsActions } from '@/actions/'

const SearchContainer = ({ goods, filterByTitleGoods }) => {
  const [visible, setVisible] = useState(false)

  const onShow = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const debSearch = _.debounce(value => filterByTitleGoods(value), 1000)

  const onSearch = value => {
    debSearch(value)
  }

  return (
    <Search
      visible={visible}
      setVisible={setVisible}
      goods={goods}
      onSearch={onSearch}
      onClose={onClose}
      onShow={onShow} />
  )
}

SearchContainer.propTypes = {
  goods: PropTypes.array.isRequired,
  filterByTitleGoods: PropTypes.func.isRequired,
}

export default connect(
  ({ goods }) => ({ goods: goods.items }),
  goodsActions,
)(SearchContainer)
