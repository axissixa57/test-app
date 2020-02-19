export default (page, name, fetchfilteredGoods, fetchSortedGoods) => {
  const start = (page - 1) * 8
  const end = page * 8

  if (!name) {
    fetchfilteredGoods && fetchfilteredGoods()
  } else if (name === 'rating') {
    fetchSortedGoods(name, 'desc', start, end)
  } else if (name === 'priceAsc') {
    fetchSortedGoods('price', 'asc', start, end)
  } else if (name === 'priceDesc') {
    fetchSortedGoods('price', 'desc', start, end)
  }
}
