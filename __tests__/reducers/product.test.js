import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import productReduce from '@/reducer/product'
import { productActions } from '@/actions/'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const { fetchProductById } = productActions

describe('Product', () => {
  test('expected actions should be dispatched on successful request', () => {
    const store = mockStore({ data: null })

    const expectedActions = ['PRODUCT:SET_IS_LOADING', 'PRODUCT:SET_ITEMS']

    return store
      .dispatch(fetchProductById('5bb6b6936cfa75c4e50bac5e'))
      .then(() => {
        const actualActions = store.getActions().map(action => action.type)

        expect(actualActions).toEqual(expectedActions)
      })
  })

  test('should update product data in store when passed a product object', () => {
    const state = {
      data: null,
    }

    const action = {
      type: 'PRODUCT:SET_ITEMS',
      payload: {
        _id: { $oid: '5bb6b6936cfa75c4e50bac5e' },
        title: 'Polo red',
        price: 50,
        size: ['XL', 'L', 'M', 'S', 'XS'],
        images: [
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952674675109.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952389433115.jpg',
          'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952939170654.jpg',
        ],
        rating: 4,
        description:
          // eslint-disable-next-line max-len
          'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
        tags: ['Polos'],
        color: ['red'],
      },
    }

    const newState = productReduce(state, action)

    expect(newState.data).not.toBeNull()
    expect(newState.data).toEqual(action.payload)
  })
})
