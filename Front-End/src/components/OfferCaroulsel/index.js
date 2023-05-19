import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import Ofertas from '../../assets/OFERTAS.png'
import { Container, OfferImg, Button, Image, ContainerItens } from './styles'

function OfferCarousel() {
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const filterOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, newCurrency: formatCurrency(product.price) }
        })

      setOffers(filterOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 500, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OfferImg src={Ofertas} alt="logo da oferta" />
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(offer => (
            <ContainerItens key={offer.id}>
              <Image src={offer.url} />
              <p>{offer.name}</p>
              <h5>{offer.newCurrency}</h5>
              <Button>Peça agora</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default OfferCarousel
