import React from 'react'

import homeLogo from '../../assets/homeLogo.png'
import { Container, ContainerLogo, ContainerOffer } from './styles'
import CategoryCarousel from '../../components/CategoryCarousel'

function Home() {
  return (
    <Container>
      <ContainerLogo src={homeLogo} alt="logo da home" />
      <CategoryCarousel />
      <ContainerOffer></ContainerOffer>
    </Container>
  )
}
export default Home
