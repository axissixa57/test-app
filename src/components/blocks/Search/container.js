import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Search from './component'
import { goodsActions } from '@/actions/'

const SearchContainer = ({ filterByTitleGoods }) => {
  const [inputValue, setValue] = useState('')

  const onChangeInput = (value = '') => {
    setValue(value)
    filterByTitleGoods(value)
  }

  return <Search onSearch={onChangeInput} inputValue={inputValue} />
}

SearchContainer.propTypes = {
  filterByTitleGoods: PropTypes.func,
}

export default connect(
  null,
  goodsActions,
)(SearchContainer)
