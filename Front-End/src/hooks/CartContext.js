import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const putCartProduct = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)
    let newCartProducts = []

    if (cartIndex >= 0) {
      newCartProducts = cartProducts
      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    localStorage.setItem(
      'codeburguer:cartData',
      JSON.stringify(newCartProducts)
    )
  }

  useEffect(() => {
    const getCartProducts = async () => {
      const cartInfo = localStorage.getItem('codeburguer:cartData')

      if (cartInfo) {
        setCartProducts(JSON.parse(cartInfo))
      }
    }

    getCartProducts()
  }, [])

  return (
    <CartContext.Provider value={{ cartProducts, putCartProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
