import React from 'react'
import { Select, Input, Form, Modal } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

const Search = ({ visible, onClose, onShow, onSearch, onChangeInput }) => {
  // const options = goods.map(user => (
  //   <Option key={goods._id.$oid}>{goods.title}</Option>
  // ))

  return (
    <div className="search">
      {/* <Input.Search
        placeholder="Поиск"
        // onChange={e => onSearch(e.target.value)}
        onChange={e => onChangeInput(e.target.value)} /> */}
      <Input.Search
        placeholder="Поиск"
        // onChange={e => onSearch(e.target.value)}
        onChange={onShow}
      />
      <Modal title="Поиск" width="90%" visible={visible} onCancel={onClose}>
        <Form className="add-dialog-form">
          <Select
            // value={inputValue}
            // onSearch={onSearch}
            // onChange={onChangeInput}
            notFoundContent={null}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            placeholder="Поиск"
            showSearch
          >
            {<Option key={1}>test</Option>}
            {<Option key={2}>test</Option>}
            {<Option key={3}>test</Option>}
          </Select>
        </Form>
      </Modal>
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func,
}

export default Search
