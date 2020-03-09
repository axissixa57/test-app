import { combineReducers } from 'redux'

import goods from '@/reducer/goods'
import theme from '@/reducer/theme'
import pagination from '@/reducer/pagination'
import product from '@/reducer/product'
import internationalization from '@/reducer/internationalization'

export default combineReducers({
  goods,
  product,
  theme,
  pagination,
  internationalization,
})
