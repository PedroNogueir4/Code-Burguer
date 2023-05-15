import React from 'react'
import ReactDOM from 'react-dom'

import { ToastContainer } from 'react-toastify'
import { UserProvider } from './hooks/UserContext'

import Login from './container/Login'
// import Cadastro from './container/Cadastro'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
