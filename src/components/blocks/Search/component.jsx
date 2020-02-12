import React from 'react'
import { Select, Input, Form, Modal } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select

const Search = ({ visible, inputValue, goods, onClose, onShow, onSearch }) => {
  const options = goods.map(good => (
    <Option key={good._id.$oid}>{good.title}</Option>
  ))

  return (
    <div className="search">
      <Input.Search
        placeholder="Поиск"
        value=""
        onClick={onShow} />
      <Modal
        title="Поиск" width="90%" visible={visible} onCancel={onClose}
        footer={null}
      >
        <Form>
          <Select
            value={inputValue}
            onSearch={onSearch}
            notFoundContent={null}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            placeholder="Поиск"
            showSearch
          >
            {options}
          </Select>
        </Form>
      </Modal>
    </div>
  )
}

Search.propTypes = {
  visible: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.shape({
        $oid: PropTypes.string,
      }),
      title: PropTypes.string,
    }),
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
}

export default Search
