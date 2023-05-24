import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Login, Home, Cadastro, Products } from '../container'

import PrivateRoute from './private-routes'

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Cadastro />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default myRoutes
