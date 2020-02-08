import React from 'react'
import { Header } from './styles'

import { Search, Userbar } from '@/components/blocks/'

const HeaderComponent = () => {
  return (
    <Header
      title="TestShop"
      subTitle={
        <>
          <Search />
          <Userbar />
        </>
      } />
  )
}

export default HeaderComponent
