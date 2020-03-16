import { parse } from 'query-string'

import { Home, Product } from '@/components/pages'
import { goodsActions, productActions, paginationActions } from '@/actions'

const { fetchPartGoods, filterBySeveralParams } = goodsActions
const { fetchProductById } = productActions
const { changeCurrentPage } = paginationActions

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    fetchInitialData: (store, path = '') =>
      store.dispatch(fetchPartGoods(0, 8)),
  },
  {
    path: '/data',
    exact: true,
    component: Home,
    fetchInitialData: (store, url = '') => {
      const truncatedUrl = url.substr(6)
      const parsed = parse(truncatedUrl)

      const {
        color_like: colors = [],
        size_like: sizes = [],
        tags_like: tags = [],
        price_gte: min = 0,
        price_lte: max = 110,
        _sort: sort = '',
        _order: order = '',
        page = 1,
      } = parsed

      const objectWithFilters = {
        colors,
        sizes,
        tags,
        min,
        max,
        sort,
        order,
      }

      store.dispatch(changeCurrentPage(page))

      return store.dispatch(
        filterBySeveralParams(truncatedUrl, objectWithFilters),
      )
    },
  },
  {
    path: '/product/:id',
    component: Product,
    fetchInitialData: (store, path = '') => store.dispatch(fetchProductById(path.split('/').pop())) 
  }
]

export default routes
