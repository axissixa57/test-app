import React from 'react'
import { Button } from 'antd'

import { Basket } from './styles'

const UserBar = () => {
  return (
    <div className="userbar">
      <Basket>
        <Button>Login</Button>
      </Basket>
    </div>
  )
}

export default UserBar
