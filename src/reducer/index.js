import { combineReducers } from 'redux'
import goods from '@/reducer/goods'
import theme from '@/reducer/theme'

export default combineReducers({
  goods,
  theme,
})
