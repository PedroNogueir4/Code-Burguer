import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Login, Home, Cadastro, Products, Cart, Admin } from '../container'

import { PrivateRoute, RoutesAdmin } from './private-routes'

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
        <Route element={<RoutesAdmin />}>
          <Route path="/pedidos" element={<Admin />} />
          <Route path="/listar-produtos" element={<Admin />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Cadastro />} />
      </Routes>
    </Router>
  )
}

export default myRoutes
