import React, { useState, useEffect } from 'react'

import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { Container, Resume, Data } from './styles'
import { Button } from '../Button'

export function CartResume() {
  const { cartProducts } = useCart()
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  useEffect(() => {
    const sumAllPrice = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllPrice)
  }, [cartProducts, deliveryTax])

  return (
    <Container>
      <Resume>
        <h4>Resumo do pedido</h4>
        <Data>
          <p>Itens</p>
          <p>{formatCurrency(finalPrice)}</p>
          <p>Taxa de entrega</p>
          <p>{formatCurrency(deliveryTax)}</p>
        </Data>
        <div className="totally">
          <h2>Total</h2>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Resume>
      <Button style={{ width: '100%' }}>Finalizar Pedido</Button>
    </Container>
  )
}
