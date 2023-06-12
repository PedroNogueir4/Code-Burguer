import React from 'react'
import { useLocation } from 'react-router-dom'

import { Container } from './styles'
import Orders from './Orders'
import ListProducts from './ListProdutcs'
import { SideMenu } from '../../components'
import paths from '../../constants/paths'

export function Admin() {
  const location = useLocation()

  return (
    <Container>
      <SideMenu />
      {location.pathname === paths.Order && <Orders />}
      {location.pathname === paths.ProductsList && <ListProducts />}
    </Container>
  )
}
