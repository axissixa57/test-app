import { axios } from '@/config'

export default {
  getProductById: id => axios.get(`/data?_id.$oid=${id}`),
}
