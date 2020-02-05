import React from 'react'
import { Header } from './styles'

import { Search, UserBar } from '@/components/blocks/'

const HeaderComponent = () => {
  return (
    <Header
      title="TestShop"
      subTitle={
        <>
          <Search />
          <UserBar />
        </>
      } />
  )
}

export default HeaderComponent
