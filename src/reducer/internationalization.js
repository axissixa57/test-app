import { INTERNATIONALIZATION } from '@/constants'

const initialState = {
  locale: 'en',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INTERNATIONALIZATION.SWITCH_LANG:
      return {
        ...state,
        locale: payload,
      }
    default:
      return state
  }
}
