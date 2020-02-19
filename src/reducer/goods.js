import { GOODS } from '@/constants'

const initialState = {
  items: [],
  filtredItems: [],
  filterName: '',
  tagsGoods: [],
  sizeGoods: [],
  colorGoods: [],
  priceRangeGoods: [0, 110],
  totalCount: 0,
  isLoading: false,
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
        filtredItems: payload.items,
        totalCount: +payload.count,
        isLoading: false,
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
    case GOODS.ADD_TAG:
      return {
        ...state,
        tagsGoods: [...state.tagsGoods, payload],
      }
    case GOODS.DELETE_TAG:
      return {
        ...state,
        tagsGoods: state.tagsGoods.filter(tag => tag !== payload),
      }
    case GOODS.ADD_COLOR:
      return {
        ...state,
        colorGoods: [...state.colorGoods, payload],
      }
    case GOODS.DELETE_COLOR:
      return {
        ...state,
        colorGoods: state.colorGoods.filter(color => color !== payload),
      }
    case GOODS.ADD_SIZE:
      return {
        ...state,
        sizeGoods: [...state.sizeGoods, payload],
      }
    case GOODS.DELETE_SIZE:
      return {
        ...state,
        sizeGoods: state.sizeGoods.filter(size => size !== payload),
      }
    case GOODS.CHANGE_PRICE:
      return {
        ...state,
        priceRangeGoods: [...payload],
      }
    case GOODS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    case GOODS.SET_VALUES_FROM_QUERIES: {
      const { tags, sizes, colors, min, max, sort, order } = payload

      return {
        ...state,
        tagsGoods: typeof tags === 'string' ? [tags] : tags,
        sizeGoods: typeof sizes === 'string' ? [sizes] : sizes,
        colorGoods: typeof colors === 'string' ? [colors] : colors,
        priceRangeGoods: [+min, +max],
        filterName:
          sort === 'rating'
            ? 'rating'
            : sort === 'price' && order === 'asc'
              ? 'priceAsc'
              : 'priceDesc',
      }
    }
    case GOODS.RESET_FILTERS_AND_SORT:
      return {
        ...state,
        filterName: '',
        tagsGoods: [],
        sizeGoods: [],
        colorGoods: [],
        priceRangeGoods: [0, 110],
      }
    default:
      return state
  }
}
