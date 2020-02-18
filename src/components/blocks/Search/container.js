import React, { useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import Search from './component'
import { goodsActions } from '@/actions/'

const SearchContainer = ({ goods, filterByTitleGoods, history }) => {
  const [value, setValue] = useState('')
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

  const onSelect = id => {
    setVisible(false)
    setValue('')
    history.push(`/product/${id}`)
  }

  return (
    <Search
      value={value}
      visible={visible}
      setVisible={setVisible}
      goods={goods}
      onSearch={onSearch}
      onClose={onClose}
      onShow={onShow}
      onSelect={onSelect} />
  )
}

SearchContainer.propTypes = {
  goods: PropTypes.array.isRequired,
  filterByTitleGoods: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default compose(
  connect(({ goods }) => ({ goods: goods.items }), goodsActions),
  withRouter,
)(SearchContainer)
