import React from 'react'
import { PropTypes } from 'prop-types'

import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerProducts, Image, ProductName, ProductPrice } from './styles'

export function CardProducts({ product }) {
  return (
    <ContainerProducts>
      <Image src={product.url} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button style={{ width: '100%' }}>Adicionar</Button>
      </div>
    </ContainerProducts>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
