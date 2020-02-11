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
  setPartFilteredGoods: items => ({
    type: GOODS.SET_FILTRED_ITEMS,
    payload: items,
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
    goodsApi.getPart(start, end).then(({ data }) => {
      dispatch(actions.setPartGoods(data))
    })
  },
  filterByTitleGoods: text => dispatch => {
    goodsApi.searchByTiitle(text).then(({ data }) => {
      dispatch(actions.setGoods(data))
    })
  },
  fetchSortedGoods: (sort, order, start, end) => dispatch => {
    goodsApi.sortBy(sort, order, start, end).then(({ data }) => {
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
  fetchfilteredGoods: (filterName, value) => (dispatch) => {
    goodsApi.filterBy(filterName, value).then(({ data }) => {
      if (value === 'S' || value === 'L') {
        const dataWithoutPrefixX = data.filter(
          good => good.size.indexOf(value) >= 0,
        )

        dispatch(actions.setPartFilteredGoods(dataWithoutPrefixX))
      } else {
        dispatch(actions.setPartFilteredGoods(data))
      }
    })
  },
}

export default actions
