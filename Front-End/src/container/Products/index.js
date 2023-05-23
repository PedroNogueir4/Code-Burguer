import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import productLogo from '../../assets/logoProdutos.png'
import {
  Container,
  ContainerLogo,
  CategoryButton,
  CategoryMenu
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategory = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategory)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <ContainerLogo src={productLogo} />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              isActive={activeCategory === category.id}
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
    </Container>
  )
}
export default Products
