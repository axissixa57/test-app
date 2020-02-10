import { GOODS } from '@/constants'

const initialState = {
  items: [],
  isLoading: false,
  isFilteredByPopular: false,
  filterName: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GOODS.SET_ITEMS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      }
    case GOODS.SET_FILTERNAME:
      return {
        ...state,
        filterName: payload,
      }
    case GOODS.SET_PART_ITEMS:
      return {
        ...state,
        items: payload,
      }
    case GOODS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}
