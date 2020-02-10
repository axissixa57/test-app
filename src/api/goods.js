import { axios } from '@/core'

export default {
  getAll: () => axios.get('/data'),
  getPart: (start, end) => axios.get(`/data?_start=${start}&_end=${end}`),
  searchByTiitle: text => axios.get(`/data?title_like=${text}`),
  filterBy: (sort, order, start, end) =>
    axios.get(
      `/data?_sort=${sort}&_order=${order}&_start=${start}&_end=${end}`,
    ),
}
