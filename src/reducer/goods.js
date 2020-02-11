import _ from 'lodash'

import { GOODS } from '@/constants'

const initialState = {
  items: [],
  filtredItems: [],
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
    case GOODS.SET_FILTRED_ITEMS:
      return {
        ...state,
        // filtredItems: [...state.filtredItems, ...payload],
        filtredItems: _.unionBy(state.filtredItems, payload, '_id.$oid'),
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
    case GOODS.DELETE_PART_FILTERED_ITEMS:
      return {
        ...state,
        filtredItems: payload,
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
