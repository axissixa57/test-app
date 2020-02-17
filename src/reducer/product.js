import { PRODUCT } from '@/constants'

const initialState = {
  data: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT.SET_ITEMS:
      return {
        ...state,
        data: payload,
      }
    case PRODUCT.DELETE_ITEMS:
      return {
        ...state,
        data: null,
      }
    default:
      return state
  }
}
