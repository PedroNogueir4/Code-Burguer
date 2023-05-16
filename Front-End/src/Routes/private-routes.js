import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = async ({ children, redirectTO }) => {
  const user = await localStorage.getItem('codeburguer:userData')
  if (!user) {
    return <Navigate to="/login" />
  }

  return <Route path="/" element={children} />
}
export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
