import { goodsApi } from '@/api'
import { GOODS } from '@/constants'

const actions = {
  setGoods: items => ({
    type: GOODS.SET_ITEMS,
    payload: items,
  }),
  setPartGoods: items => ({
    type: GOODS.SET_PART_ITEMS,
    payload: items,
  }),
  fetchGoods: () => dispatch => {
    goodsApi.getAll().then(({ data }) => {
      dispatch(actions.setGoods(data))
    })
  },
  fetchPartGoods: (start, end) => dispatch => {
    goodsApi.getPart(start, end).then(({ data }) => {
      dispatch(actions.setPartGoods(data))
    })
  },
  filterByTitleGoods: text => dispatch =>
    goodsApi.searchByTiitle(text).then(({ data }) => {
      dispatch(actions.setGoods(data))
    }),
}

export default actions
