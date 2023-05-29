import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import {
  Container,
  User,
  ContainerRight,
  NavigationContainer,
  Logout
} from './styles'
import userImg from '../../assets/userImg.png'
import cartImg from '../../assets/cartImg.png'

export function Header() {
  const navigate = useNavigate()
  const { userData } = useUser()

  return (
    <Container>
      <NavigationContainer>
        <button onClick={() => navigate('/')} style={{ color: '#9758A6' }}>
          Home
        </button>
        <button
          onClick={() => navigate('/produtos')}
          style={{ color: '#555555' }}
        >
          Ver produtos
        </button>
      </NavigationContainer>
      <ContainerRight>
        <button onClick={() => navigate('/carrinho')}>
          <img src={cartImg} />
        </button>
        <User>
          <img style={{ marginRight: '10px' }} src={userImg} />
          <div>
            <p>Olá, {userData.name}</p>
            <Logout>Sair</Logout>
          </div>
        </User>
      </ContainerRight>
    </Container>
  )
}
