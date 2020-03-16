import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '@/components/blocks'

describe('Header', () => {
  test('match snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
