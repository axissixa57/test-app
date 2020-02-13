export default (
  tagsGoods,
  sizeGoods,
  colorGoods,
  priceRangeGoods,
  filterName,
  start,
  end,
) => {
  let url = ''
  const [min, max] = priceRangeGoods

  url = tagsGoods.reduce((url, tagName) => url + `tags_like=${tagName}&`, '')

  sizeGoods.length > 0 &&
    (url += sizeGoods.reduce((url, size) => url + `size_like=${size}&`, ''))

  colorGoods.length > 0 &&
    (url += colorGoods.reduce((url, color) => url + `color_like=${color}&`, ''))

  url += `price_gte=${min}&price_lte=${max}&`

  if (filterName === 'rating') {
    url += '_sort=rating&_order=desc&'
  } else if (filterName === 'priceAsc') {
    url += '_sort=price&_order=asc&'
  } else if (filterName === 'priceDesc') {
    url += '_sort=price&_order=desc&'
  }

  if (start !== undefined && end !== undefined) {
    url += `_start=${start}&_end=${end}`
  }

  return url
}
