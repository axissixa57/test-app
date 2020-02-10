import { PAGINATION } from '@/constants'

const actions = {
  changeCurrentPage: page => ({
    type: PAGINATION.SET_CURRENT_PAGE,
    payload: page,
  }),
}

export default actions
