import { axios } from '@/core'

export default {
  getAll: () => axios.get('/data'),
  getPart: (start, end) => axios.get(`/data?_start=${start}&_end=${end}`),
  searchByTiitle: text => axios.get(`/data?title_like=${text}`),
  sortBy: (url, sort, order, start, end) =>
    axios.get(
      `/data?${url}_sort=${sort}&_order=${order}&_start=${start}&_end=${end}`,
    ),
  filterBy: (filterName, value) =>
    axios.get(`/data?${filterName}_like=${value}`),
  filterBySeveralParams: url => axios.get(`/data?${url}`),
}
