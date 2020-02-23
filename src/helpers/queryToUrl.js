import { stringify, parse } from 'query-string'

export default {
  add: (queryName, queryValue, location, history) => {
    const stringified = stringify({ [`${queryName}_like`]: queryValue })

    location.search = !location.search
      ? `data?${stringified}`
      : `${location.search}&${stringified}`

    history.push(location.search)
  },
  delete: (queryName, queryValue, location, history) => {
    const parsed = parse(location.search)

    if (`${queryName}_like` in parsed) {
      const filter = parsed[`${queryName}_like`]

      if (typeof filter === 'string') {
        parsed[`${queryName}_like`] = null
      } else if (Array.isArray(filter)) {
        parsed[`${queryName}_like`] = filter.filter(v => v !== queryValue)
      }
    }

    const stringified = stringify(parsed, {
      skipNull: true,
    })

    history.push(`data?${stringified}`)
  },
  updatePrice: (min, max, location, history) => {
    const parsed = parse(location.search)

    if ('price_gte' in parsed || 'price_lte' in parsed) {
      location.search = location.search.replace(
        /&?price_gte=[0-9]{1,}&price_lte=[0-9]{1,}&?/,
        '',
      )
    }

    const stringified = stringify({ price_gte: min, price_lte: max })

    location.search = !location.search
      ? `data?${stringified}`
      : `${location.search}&${stringified}`

    history.push(location.search)
  },
  updatePage: (page, location, history) => {
    const parsed = parse(location.search)
    const start = (page - 1) * 8
    const end = page * 8

    if ('page' in parsed) {
      parsed.page = page
      parsed._start = start
      parsed._end = end

      const stringified = stringify(parsed)

      history.push(`data?${stringified}`)
    } else {
      const stringified = stringify({ page, _start: start, _end: end })

      location.search = !location.search
        ? `data?${stringified}`
        : `${location.search}&${stringified}`

      history.push(location.search)
    }
  },
}
