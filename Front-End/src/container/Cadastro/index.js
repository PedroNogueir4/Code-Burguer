import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'

import Button from '../../components/Button'
import {
  ContainerLeft,
  Container,
  ContainerMain,
  Label,
  Inputs,
  SignupLInk,
  ErrorMessage
} from './styles'

import registerImg from '../../assets/ImgCadastro.png'
import logo from '../../assets/logo.png'

function Cadastro() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
    admin: Yup.boolean()
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <ContainerLeft>
        <img src={registerImg} />
      </ContainerLeft>
      <ContainerMain>
        <img src={logo} />
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Inputs
            type="text"
            {...register('name')}
            error={errors.name?.message}
          ></Inputs>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
          <Label>Email</Label>
          <Inputs
            type="email"
            {...register('email')}
            error={errors.email?.message}
          ></Inputs>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <Label>Senha</Label>
          <Inputs
            type="password"
            {...register('password')}
            error={errors.password?.message}
          ></Inputs>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <Label>Confirmar Senha</Label>
          <Inputs
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          ></Inputs>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <Button type="submit" style={{ marginTop: 15 }}>
            Sign Up
          </Button>
        </form>
        <SignupLInk>
          Já possui conta? <a>Sign In</a>
        </SignupLInk>
      </ContainerMain>
    </Container>
  )
}

export default Cadastro
