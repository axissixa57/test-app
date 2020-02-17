import React from 'react'
import { Header } from './styles'
import { NavLink } from 'react-router-dom'

import { Search, Userbar } from '@/components/blocks/'

const HeaderComponent = () => {
  return (
    <Header
      title={<NavLink to="/">TestShop</NavLink>}
      subTitle={
        <>
          <Search />
          <Userbar />
        </>
      } />
  )
}

export default HeaderComponent
