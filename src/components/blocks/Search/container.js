import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Search from './component'
import { goodsActions } from '@/actions/'
import { goodsApi } from '@/api/'

const SearchContainer = ({ filterByTitleGoods }) => {
  const [visible, setVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [goods, setGoods] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const onChangeInput = (value = '') => {
    setInputValue(value)
    setVisible(true)
    if (value) filterByTitleGoods(value)
  }

  const onShow = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const onSearch = value => {
    setIsLoading(true)
    goodsApi
      .searchByTiitle(value)
      .then(({ data }) => {
        setGoods(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const handleChangeInput = value => {
    setInputValue(value)
  }

  return (
    <Search
      visible={visible}
      setVisible={setVisible}
      goods={goods}
      inputValue={inputValue}
      isLoading={isLoading}
      onSearch={onSearch}
      onChangeInput={onChangeInput}
      onClose={onClose}
      onShow={onShow}
    />
  )
}

SearchContainer.propTypes = {
  filterByTitleGoods: PropTypes.func,
}

export default connect(null, goodsActions)(SearchContainer)
