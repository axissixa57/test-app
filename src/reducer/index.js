import { combineReducers } from 'redux'
import goods from '@/reducer/goods'
import theme from '@/reducer/theme'
import pagination from '@/reducer/pagination'

export default combineReducers({
  goods,
  theme,
  pagination,
})
