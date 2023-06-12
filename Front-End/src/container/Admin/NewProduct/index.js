import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import api from '../../../services/api'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'

import { Button } from '../../../components/index'
import { Container, Label, Inputs, LabelUpload, ReactSelectS } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')
    }
    loadProducts()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Inputs type="text" {...register('name')} />

        <Label>Preço</Label>
        <Inputs type="number" {...register('price')} />

        <LabelUpload>
          <>
            <CloudUploadOutlinedIcon />
            {fileName || 'Carregue a imagem do produto'}
          </>
          <input
            {...register('file')}
            type="file"
            accept="imagem/png, imagem/jpeg"
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <ReactSelectS />

        <Button style={{ width: '100%' }}>Adicionar Produto</Button>
      </form>
    </Container>
  )
}

export default NewProduct
