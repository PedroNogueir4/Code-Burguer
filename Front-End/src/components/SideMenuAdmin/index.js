import React from 'react'
import { useUser } from '../../hooks/UserContext'
import { useNavigate } from 'react-router-dom'
import { Container, MenuOptions, Button, ContainerUser, Logout } from './styles'

import sacolaAdm from '../../assets/sacolaAdm.png'
import addProdutoAdm from '../../assets/addProdutoAdm.png'
import produtosAdm from '../../assets/produtosAdm.png'
import userImg from '../../assets/userIcon.png'

export function SideMenu() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()

  function adminLogout() {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <MenuOptions>
        <hr></hr>
        <Button to={'/pedidos'}>
          <img src={sacolaAdm} />
          Pedidos
        </Button>
        <Button to={''}>
          <img src={produtosAdm} />
          Produtos
        </Button>
        <Button to={''}>
          <img src={addProdutoAdm} />
          Adicionar Produto
        </Button>
        <hr></hr>
      </MenuOptions>
      <ContainerUser>
        <img src={userImg} />
        <div>
          <p>Olá, {userData.name}</p>
          <Logout onClick={() => adminLogout()}>Sair</Logout>
        </div>
      </ContainerUser>
    </Container>
  )
}
