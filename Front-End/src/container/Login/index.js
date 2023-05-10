import React from 'react'
import {
  ContainerLeft,
  Container,
  ContainerMain,
  P,
  Inputs,
  Button,
  SignupLInk
} from './styles'

import burguerImg from '../../assets/burguerLogin.png'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <Container>
      <ContainerLeft>
        <img src={burguerImg} />
      </ContainerLeft>
      <ContainerMain>
        <img src={logo} />
        <h1>Login</h1>
        <P>Email</P>
        <Inputs></Inputs>
        <P>Senha</P>
        <Inputs></Inputs>
        <Button>Sign In</Button>
        <SignupLInk>
          Não possui conta? <a>Sign Up</a>
        </SignupLInk>
      </ContainerMain>
    </Container>
  )
}

export default Login
