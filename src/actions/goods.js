import { goodsApi } from '@/api'
import { GOODS } from '@/constants'

const actions = {
  setGoods: items => ({
    type: GOODS.SET_ITEMS,
    payload: items,
  }),
  fetchGoods: () => dispatch => {
    goodsApi.getAll().then(({ data }) => {
      dispatch(actions.setGoods(data))
    })
  },
}

export default actions
