import { PRODUCT } from '@/constants'
import { productApi } from '@/api'

const actions = {
  setProductData: data => ({
    type: PRODUCT.SET_ITEMS,
    payload: data,
  }),
  deleteProductData: () => ({
    type: PRODUCT.DELETE_ITEMS,
  }),
  fetchProductById: id => dispatch => {
    productApi.getProductById(id).then(res => {
      const [data] = res.data
      dispatch(actions.setProductData(data))
    })
  },
}

export default actions
