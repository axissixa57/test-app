import { GOODS } from '@/constants'

const initialState = {
  items: [],
  filteredItems: [],
  isLoading: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GOODS.SET_ITEMS:
      return {
        ...state,
        items: payload,
        filteredItems: payload,
        isLoading: false,
      }
    case GOODS.FILTER_BY_TITLE:
      return {
        ...state,
        filteredItems: state.items.filter(
          good => good.title.toLowerCase().indexOf(payload.toLowerCase()) >= 0,
        ),
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
