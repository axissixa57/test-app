import { axios } from '@/core'

export default {
  getAll: () => axios.get('/data'),
  getPart: (start, end) => axios.get(`/data?_start=${start}&_end=${end}`),
  searchByTiitle: text => axios.get(`/data?title_like=${text}`),
}
