import React from 'react'

import cartLogo from '../../assets/cartLogo.png'
import { Container, ContainerLogo } from './styles'
import { CartItems, CartResume } from '../../components'

export function Cart() {
  return (
    <Container>
      <ContainerLogo src={cartLogo} />
      <div className="container-itens">
        <CartItems />
        <CartResume />
      </div>
    </Container>
  )
}
