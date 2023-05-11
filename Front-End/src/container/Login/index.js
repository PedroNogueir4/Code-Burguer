import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'

import {
  ContainerLeft,
  Container,
  ContainerMain,
  P,
  Inputs,
  Button,
  SignupLInk,
  ErrorMessage
} from './styles'

import burguerImg from '../../assets/burguerLogin.png'
import logo from '../../assets/logo.png'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <ContainerLeft>
        <img src={burguerImg} />
      </ContainerLeft>
      <ContainerMain>
        <img src={logo} />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <P>Email</P>
          <Inputs
            type="email"
            {...register('email')}
            error={errors.email?.message}
          ></Inputs>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <P>Senha</P>
          <Inputs
            type="password"
            {...register('password')}
            error={errors.password?.message}
          ></Inputs>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Button type="submit">Sign In</Button>
        </form>
        <SignupLInk>
          Não possui conta? <a>Sign Up</a>
        </SignupLInk>
      </ContainerMain>
    </Container>
  )
}

export default Login
