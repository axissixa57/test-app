export default (tagsGoods, sizeGoods, colorGoods, start, end) => {
  let url = ''

  url = tagsGoods.reduce((url, tagName) => url + `tags_like=${tagName}&`, '')

  sizeGoods.length > 0 &&
    (url += sizeGoods.reduce((url, size) => url + `size_like=${size}&`, ''))

  colorGoods.length > 0 &&
    (url += colorGoods.reduce((url, color) => url + `color_like=${color}&`, ''))

  console.log(start, end)
  if (start && end) {
    console.log('test')
    url += `_start=${start}&_end=${end}`
  }

  return url
}
