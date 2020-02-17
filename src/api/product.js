import { axios } from '@/core'

export default {
  getProductById: id => axios.get(`/data?_id.$oid=${id}`),
}
