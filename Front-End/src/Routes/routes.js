import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Login from '../container/Login'
import Cadastro from '../container/Cadastro'
import Home from '../container/Home'
import PrivateRoute from './private-routes'

function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Cadastro />} />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute redirectTO="/login">
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default myRoutes
