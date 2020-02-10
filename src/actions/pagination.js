import { PAGINATION } from '@/constants'

const actions = {
  changeCurrentPage: page => ({
    type: PAGINATION.CURRENT_PAGE,
    payload: page,
  }),
}

export default actions
