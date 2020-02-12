export default (page, name, fetchfilteredGoods, fetchSortedGoods, setButtonValue) => {
  const start = (page - 1) * 8
  const end = page * 8

  if (!name) {
    fetchfilteredGoods && fetchfilteredGoods()
  } else if (name === 'rating') {
    fetchSortedGoods(name, 'desc', start, end)
    setButtonValue && setButtonValue('Sort by: popularity')
  } else if (name === 'priceAsc') {
    fetchSortedGoods('price', 'asc', start, end)
    setButtonValue && setButtonValue('Sort by: cheaper')
  } else if (name === 'priceDesc') {
    fetchSortedGoods('price', 'desc', start, end)
    setButtonValue && setButtonValue('Sort by: expensive')
  }
}
