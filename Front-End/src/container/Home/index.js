import React from 'react'

import homeLogo from '../../assets/homeLogo.png'
import { Container, ContainerLogo } from './styles'
import { CategoryCarousel, OfferCarousel } from '../../components'

export function Home() {
  return (
    <Container>
      <ContainerLogo src={homeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}
