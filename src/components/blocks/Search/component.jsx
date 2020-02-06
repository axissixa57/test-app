import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

const Search = ({ onSearch }) => {
  return (
    <div className="search">
      <Input.Search
        placeholder="Поиск"
        onChange={e => onSearch(e.target.value)} />
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func,
}

export default Search
