import { GOODS } from '@/constants'

const initialState = {
  items: [
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac5e' },
    //   title: 'Polo red',
    //   price: 50,
    //   size: ['XL', 'L', 'M', 'S', 'XS'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/source-img/20160603190149_72043.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952674675109.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952389433115.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/06/03/thumb-img/1464923952939170654.jpg',
    //   ],
    //   rating: 4,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Polos'],
    //   color: ['red'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac5f' },
    //   title: 'Yellow pant',
    //   price: 6,
    //   size: ['XS', 'L'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_27922.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_35871.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_67554.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720200455_52289.jpg',
    //   ],
    //   rating: 3,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Pants'],
    //   color: ['yellow'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac60' },
    //   title: 'Blue \u0026 yellow pant',
    //   price: 66,
    //   size: ['XS', 'M', 'L'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/25/source-img/20180725172558_32423.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/25/source-img/20180725172558_38854.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/25/source-img/20180725172558_59140.jpg',
    //   ],
    //   rating: 3.5,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Pants'],
    //   color: ['yellow', 'blue'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac61' },
    //   title: 'Dark blue jean',
    //   price: 20,
    //   size: ['XS', 'L'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720161510_63076.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720161510_46741.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/07/20/source-img/20180720161510_77977.jpg',
    //   ],
    //   rating: 0.5,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Pants'],
    //   color: ['blue'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac62' },
    //   title: 'Blue cotton jacket',
    //   price: 110,
    //   size: ['XL', 'XS', 'M', 'L'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/30/source-img/20171030165524_57809.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/30/source-img/20171030165524_96044.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2017/10/30/source-img/20171030165524_11220.jpg',
    //   ],
    //   rating: 4.5,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Jackets'],
    //   color: ['blue', 'white'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac63' },
    //   title: 'Modern art shirt',
    //   price: 10,
    //   size: ['XL', 'L', 'XS'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155617_93798.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155617_76669.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155617_41853.jpg',
    //     'https://gl oimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/03/source-img/20180803155616_96061.jpg',
    //   ],
    //   rating: 5,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Shirts'],
    //   color: ['yellow', 'blue', 'purple', 'green'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac64' },
    //   title: 'Black cotton jacket',
    //   price: 110,
    //   size: ['XL', 'XS', 'M', 'L'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_91772.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_14734.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_85675.jpg',
    //   ],
    //   rating: 4.5,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Jackets'],
    //   color: ['black', 'grey'],
    // },
    // {
    //   _id: { $oid: '5bb6b6936cfa75c4e50bac65' },
    //   title: 'Blazer black',
    //   price: 65,
    //   size: ['XL', 'XS', 'L'],
    //   images: [
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2016/07/25/source-img/20160725122041_81042.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_14734.jpg',
    //     'https://gloimg.samcdn.com/S/pdm-product-pic/Clothing/2018/08/24/source-img/20180824193826_85675.jpg',
    //   ],
    //   rating: 4.5,
    //   description:
    //     'uspendisse nisi erat, elementum nec mollis ut, dignissim sit amet eros. Cras venenatis erat sit amet eros fer mentum malesuada. Sed lobortis mi neque, id aliquam massa consequat quis. Nunc diam dolor, viverra eu tellus a, mattis vehicul a nisi. Nullam bibendum ultrices quam, in faucibus lectus faucibus et. Proin tincidunt diam mattis arcu vulputate, ac posuere ero s fringilla. Aenean justo ante, iaculis id suscipit id, lobortis sit amet neque. Vestibulum rhoncus risus vitae tortor dictum, at fini bus ex convallis. Pellentesque venenatis libero in enim mattis cursus. Mauris pretium magna nisi, et pharetra felis elementum sit amet. N ullam ornare condimentum tortor condimentum volutpat. Suspendisse eget mattis nulla, sit amet venenatis magna. Sed pulvinar nunc quam, nec port titor eros accumsan id. Ut sapien ante, dignissim sed dapibus vitae, temp',
    //   tags: ['Jackets'],
    //   color: ['black', 'grey'],
    // },
  ],
  isLoading: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GOODS.SET_ITEMS:
      return {
        ...state,
        items: payload,
        isLoading: false,
      }
    case GOODS.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}
