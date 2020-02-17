import { combineReducers } from 'redux'
import goods from '@/reducer/goods'
import theme from '@/reducer/theme'
import pagination from '@/reducer/pagination'
import product from '@/reducer/product'

export default combineReducers({
  goods,
  product,
  theme,
  pagination,
})
