import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
  const user = localStorage.getItem('codeburguer:userData')

  return user ? <Outlet /> : <Navigate to="/login" />
}

export const RoutesAdmin = () => {
  const user = localStorage.getItem('codeburguer:userData')
  const verifyAdmin = JSON.parse(user).admin
  return verifyAdmin ? <Outlet /> : <Navigate to="/" />
}
