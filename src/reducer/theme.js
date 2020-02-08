import { THEME } from '@/constants'
import { light, dark } from '@/theme/globalStyle'

const initialState = {
  backgroundColor: light,
  switch: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case THEME.DARK_MODE:
      return {
        ...state,
        switch: !state.switch,
        backgroundColor: state.switch ? light : dark,
      }
    default:
      return state
  }
}
