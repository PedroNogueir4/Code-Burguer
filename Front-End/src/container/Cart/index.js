import React from 'react'

import cartLogo from '../../assets/cartLogo.png'
import { Container, ContainerLogo } from './styles'
import { CartItems } from '../../components'

export function Cart() {
  return (
    <Container>
      <ContainerLogo src={cartLogo} />
      <CartItems />
    </Container>
  )
}
