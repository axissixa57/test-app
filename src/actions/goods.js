import { goodsApi } from '@/api'
import { GOODS } from '@/constants'
import { createPartUrl } from '@/helpers'

const actions = {
  setGoods: items => ({
    type: GOODS.SET_ITEMS,
    payload: items,
  }),
  setFilterName: text => ({
    type: GOODS.SET_FILTERNAME,
    payload: text,
  }),
  setTagGood: text => ({
    type: GOODS.ADD_TAG,
    payload: text,
  }),
  deleteTagGood: text => ({
    type: GOODS.DELETE_TAG,
    payload: text,
  }),
  setColorGood: text => ({
    type: GOODS.ADD_COLOR,
    payload: text,
  }),
  deleteColorGood: text => ({
    type: GOODS.DELETE_COLOR,
    payload: text,
  }),
  setSizeGood: text => ({
    type: GOODS.ADD_SIZE,
    payload: text,
  }),
  changePriceRangeGoods: range => ({
    type: GOODS.CHANGE_PRICE,
    payload: range,
  }),
  deleteSizeGood: text => ({
    type: GOODS.DELETE_SIZE,
    payload: text,
  }),
  setPartGoods: items => ({
    type: GOODS.SET_PART_ITEMS,
    payload: items,
  }),
  setPartFilteredGoods: (items, count) => ({
    type: GOODS.SET_FILTRED_ITEMS,
    payload: { items, count },
  }),
  deletePartFilteredItems: items => ({
    type: GOODS.DELETE_PART_FILTERED_ITEMS,
    payload: items,
  }),
  fetchGoods: () => dispatch => {
    goodsApi.getAll().then(({ data }) => {
      dispatch(actions.setGoods(data))
    })
  },
  fetchPartGoods: (start, end) => dispatch => {
    goodsApi.getPart(start, end).then(({ data, headers }) => {
      // dispatch(actions.setPartGoods(data))

      dispatch(actions.setPartFilteredGoods(data, headers['x-total-count']))
    })
  },
  filterByTitleGoods: text => dispatch => {
    goodsApi.searchByTiitle(text).then(({ data }) => {
      dispatch(actions.setGoods(data))
    })
  },
  fetchSortedGoods: (sort, order, start, end) => (dispatch, getState) => {
    const { goods } = getState()
    const { tagsGoods, sizeGoods, colorGoods } = goods
    let url = ''

    if (tagsGoods.length > 0 || sizeGoods.length > 0 || colorGoods.length > 0) {
      url = createPartUrl(tagsGoods, sizeGoods, colorGoods)
    }

    goodsApi.sortBy(url, sort, order, start, end).then(({ data, headers }) => {
      if (sort === 'price') {
        sort === 'price' && order === 'asc'
          ? dispatch(actions.setFilterName('priceAsc'))
          : dispatch(actions.setFilterName('priceDesc'))
      } else {
        dispatch(actions.setFilterName(sort))
      }

      dispatch(actions.setPartFilteredGoods(data, headers['x-total-count']))
    })
  },
  fetchfilteredGoods: () => (dispatch, getState) => {
    const { goods, pagination } = getState()
    const { tagsGoods, sizeGoods, colorGoods, priceRangeGoods } = goods
    const { currentPage } = pagination

    const start = (currentPage - 1) * 8
    const end = currentPage * 8

    // filtr with a few params
    if (tagsGoods.length > 0 || sizeGoods.length > 0 || colorGoods.length > 0) {
      const url = createPartUrl(tagsGoods, sizeGoods, colorGoods, priceRangeGoods, start, end)

      goodsApi.filterBySeveralParams(url).then(({ data, headers }) => {
        dispatch(actions.setPartFilteredGoods(data, headers['x-total-count'] || data.length))
      })
    } else {
      dispatch(actions.fetchPartGoods(start, end))
    }
  },
}

export default actions
