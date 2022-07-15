import React from 'react'
import styled from 'styled-components'
import Button from '../components/Buttons/Button'
import ContainerBox from '../components/ContainerProducts/ContainerBoxProduct'
import PriceDetails from '../components/PriceDetails/PriceDetails'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ContainerTitle = styled.p`
  height: 17px;
  width: 319px;
  color: var(--title-color);
  margin-left: 20px;

  font-size: 14px;
  font-weight: 700;

  line-height: 17px;
  text-transform: uppercase;
`
const Container = styled.div`
  width: 341px;
  height: 325px;
  box-sizing: border-box;
  padding: 5px;

  border-radius: 4px;
  display: flex;
  margin: 8px;

  position: relative;
  background-color: white;
`
function formatCurrency(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function BasketPage() {
  const [productData, setProductData] = useState()

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => {
        setProductData(response.data)
        console.log(response.data.subTotal)
      })
      .catch(console.error)
  }, [])
  return (
    <>
      <ContainerTitle>Produtos</ContainerTitle>
      <Container>
        <div>
          {productData ? (
            productData.items.map((item) => (
              <ContainerBox
                key={item.product.sku}
                ProductImage={item.product.imageObjects[0].thumbnail}
                ProductDescription={formatCurrency(item.product.name)}
                ProductPrice={formatCurrency(item.product.priceSpecification.price)}
              />
            ))
          ) : (
            <p>nenhum produto encontrado</p>
          )}
        </div>
      </Container>
      <div>
        {productData ? (
          <PriceDetails
            ProductsSum={formatCurrency(productData.subTotal)}
            ShippingPrice={formatCurrency(productData.shippingTotal)}
            Discount={formatCurrency(productData.discount)}
            Total={formatCurrency(productData.total)}
          />
        ) : (
          <p>não encontrado</p>
        )}
      </div>
      <Button></Button>
    </>
  )
}

export default BasketPage
