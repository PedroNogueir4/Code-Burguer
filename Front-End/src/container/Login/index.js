import React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'
import { useUser } from '../../hooks/UserContext'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components'
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

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

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
    try {
      const status = await fetch('http://localhost:3001/sessions', {
        method: 'post',
        withCredentials: false,
        headers: { 'Content-Type': 'application/json', Accept: '*' },
        body: JSON.stringify({
          email: clientData.email,
          password: clientData.password
        })
      })
      const result = await status.json()

      if (!result.error) {
        toast.success('Seja Bem-Vindo!')
        navigate('/')
      } else {
        toast.error('Email ou senha incorretos!')
      }
      putUserData(result)
    } catch (error) {
      console.log(error)
      toast.error('Falha no sistema!,Tente novamente')
    }
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
          Não possui conta?{' '}
          <Link style={{ color: 'white' }} to={'/users'}>
            Sign Up
          </Link>
        </SignupLInk>
      </ContainerMain>
    </Container>
  )
}
