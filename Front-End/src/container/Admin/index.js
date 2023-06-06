import React from 'react'

import { Container } from './styles'
import Orders from './Orders'
import { SideMenu } from '../../components'

export function Admin() {
  return (
    <Container>
      <SideMenu />
      <Orders />
    </Container>
  )
}
