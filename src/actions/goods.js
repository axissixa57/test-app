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
  deleteSizeGood: text => ({
    type: GOODS.DELETE_SIZE,
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
      // dispatch(actions.setPartGoods(data))
      dispatch(actions.setPartFilteredGoods(data))
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

    console.log(tagsGoods, sizeGoods, colorGoods)

    if (tagsGoods.length > 0 || colorGoods.length > 0 || sizeGoods.length > 0) {
      url = tagsGoods.reduce(
        (url, tagName) => url + `tags_like=${tagName}&`,
        '',
      )

      sizeGoods.length > 0 &&
        (url += sizeGoods.reduce((url, size) => url + `size_like=${size}&`, ''))

      colorGoods.length > 0 &&
        (url += colorGoods.reduce(
          (url, color) => url + `color_like=${color}&`,
          '',
        ))
    }

    goodsApi.sortBy(url, sort, order, start, end).then(({ data }) => {
      if (sort === 'price') {
        sort === 'price' && order === 'asc'
          ? dispatch(actions.setFilterName('priceAsc'))
          : dispatch(actions.setFilterName('priceDesc'))
      } else {
        dispatch(actions.setFilterName(sort))
      }

      // dispatch(actions.setPartGoods(data))
      dispatch(actions.setPartFilteredGoods(data))
    })
  },
  fetchfilteredGoods: (filterName, value) => (dispatch, getState) => {
    const { goods } = getState()
    const { tagsGoods, sizeGoods, colorGoods } = goods

    // filtr with a few params
    if (tagsGoods.length > 0 || sizeGoods.length > 0 || colorGoods.length > 0) {
      let url = ''

      url = tagsGoods.reduce(
        (url, tagName) => url + `tags_like=${tagName}&`,
        '',
      )

      sizeGoods.length > 0 &&
        (url += sizeGoods.reduce((url, size) => url + `size_like=${size}&`, ''))

      colorGoods.length > 0 &&
        (url += colorGoods.reduce(
          (url, color) => url + `color_like=${color}&`,
          '',
        ))

      goodsApi.filterBySeveralParams(url).then(({ data }) => {
        dispatch(actions.setPartFilteredGoods(data))
      })
    } else {
      // goodsApi.filterBy(filterName, value).then(({ data }) => {
      //   // if need s size goods - json-server pulled s and xs sizes, for l and xl as well
      //   if (value === 'S' || value === 'L') {
      //     const dataWithoutPrefixX = data.filter(
      //       good => good.size.indexOf(value) >= 0,
      //     )

      //     dispatch(actions.setPartFilteredGoods(dataWithoutPrefixX))
      //   } else {
      //     dispatch(actions.setPartFilteredGoods(data))
      //   }
      // })

      dispatch(actions.fetchPartGoods(0, 8))
    }
  },
}

export default actions
