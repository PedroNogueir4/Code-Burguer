import React from 'react'

import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { PropTypes } from 'prop-types'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { cartProducts } = useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p style={{ marginLeft: '23px' }}>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.price * product.quantity)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}

CartItems.propTypes = {
  product: PropTypes.object
}
