import React from 'react'
import { create } from 'react-test-renderer'
import { Pagination } from '@/components/blocks'

describe('Pagination component tests', () => {
  test('total number of pages with forward and back buttons', () => {
    const component = create(
      <Pagination
        current={3}
        total={35}
        pageSize={8}
        size="small"
        onChange={() => {}} />,
    )

    // console.log(component.toJSON())

    const { root } = component
    const li = root.findAllByType('li')
    expect(li.length).toBe(7)
  })

  test('if the pagination position is on the last page, then stop further navigation', () => {
    const component = create(
      <Pagination
        current={5}
        total={35}
        pageSize={8}
        size="small"
        onChange={() => {}} />,
    )

    const { root } = component
    const button = root.findByProps({ 'aria-disabled': true }).children
    expect(button.length).toBe(1)
  })
})
