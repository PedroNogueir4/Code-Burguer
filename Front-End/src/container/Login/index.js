import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'
import api from '../../services/api'

import Button from '../../components/Button'
import {
  ContainerLeft,
  Container,
  ContainerMain,
  P,
  Inputs,
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
    await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando dados',
        success: 'Seja Bem-vindo(a)!',
        error: 'Verifique seus dados!'
      }
    )
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
          <Button type="submit" style={{ marginTop: '12%' }}>
            Sign In
          </Button>
        </form>
        <SignupLInk>
          Não possui conta? <a>Sign Up</a>
        </SignupLInk>
      </ContainerMain>
    </Container>
  )
}

export default Login
