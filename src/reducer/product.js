import { PRODUCT } from '@/constants'

const initialState = {
  data: null,
  isLoading: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT.SET_ITEMS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      }
    case PRODUCT.DELETE_ITEMS:
      return {
        ...state,
        data: null,
      }
    case PRODUCT.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}
