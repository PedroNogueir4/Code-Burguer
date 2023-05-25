import React from 'react'
import { PropTypes } from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerProducts, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  const { putCartProduct } = useCart()
  return (
    <ContainerProducts>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button
          onClick={() => putCartProduct(product)}
          style={{ width: '100%' }}
        >
          Adicionar
        </Button>
      </div>
    </ContainerProducts>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
