import React from 'react'
import ReactDOM from 'react-dom'

import { ToastContainer } from 'react-toastify'

import Login from './container/Login'
import Cadastro from './container/Cadastro'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <Cadastro />
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
