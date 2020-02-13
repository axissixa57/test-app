export default (tagsGoods, sizeGoods, colorGoods, priceRangeGoods, start, end) => {
  let url = ''
  const [min, max] = priceRangeGoods

  url = tagsGoods.reduce((url, tagName) => url + `tags_like=${tagName}&`, '')

  sizeGoods.length > 0 &&
    (url += sizeGoods.reduce((url, size) => url + `size_like=${size}&`, ''))

  colorGoods.length > 0 &&
    (url += colorGoods.reduce((url, color) => url + `color_like=${color}&`, ''))

  url += `price_gte=${min}&price_lte${max}`

  if (start !== undefined && end !== undefined) {
    url += `_start=${start}&_end=${end}`
  }

  return url
}
