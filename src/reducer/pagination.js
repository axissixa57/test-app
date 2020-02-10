import { PAGINATION } from '@/constants'

const initialState = {
  currentPage: 1,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGINATION.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      }
    default:
      return state
  }
}
