import React from 'react'

import homeLogo from '../../assets/homeLogo.png'
import { Container, ContainerLogo } from './styles'
import CategoryCarousel from '../../components/CategoryCarousel'
import OfferCarousel from '../../components/OfferCaroulsel'

function Home() {
  return (
    <Container>
      <ContainerLogo src={homeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
export default Home
