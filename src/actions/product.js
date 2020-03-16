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
    dispatch(actions.setIsLoading(true))
    return productApi
      .getProductById(id)
      .then(res => {
        const [data] = res.data
        dispatch(actions.setProductData(data))
      })
      .catch(() => {
        dispatch(actions.setIsLoading(false))
      })
  },
  setIsLoading: bool => ({
    type: PRODUCT.SET_IS_LOADING,
    payload: bool,
  }),
}

export default actions
