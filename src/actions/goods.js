import { goodsApi } from '@/api'
import { GOODS } from '@/constants'

const actions = {
  setGoods: items => ({
    type: GOODS.SET_ITEMS,
    payload: items,
  }),
  setFilterName: text => ({
    type: GOODS.SET_FILTERNAME,
    payload: text,
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
  fetchFiltredGoods: (sort, order, start, end) => dispatch => {
    goodsApi.filterBy(sort, order, start, end).then(({ data }) => {
      if (sort === 'price') {
        sort === 'price' && order === 'asc'
          ? dispatch(actions.setFilterName('priceAsc'))
          : dispatch(actions.setFilterName('priceDesc'))
      } else {
        dispatch(actions.setFilterName(sort))
      }

      dispatch(actions.setPartGoods(data))
    })
  },
}

export default actions
