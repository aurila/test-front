import React from 'react'
import styled from 'styled-components'
import ContainerBox from '../components/ContainerProducts/ContainerBoxProduct'
import PriceDetails from '../components/PriceDetails/PriceDetails'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ButtonToPayment from '../components/Buttons/ButtonToPayment'

const ContainerTitle = styled.p`
  height: 17px;
  width: 90%;
  margin-left: 5%;

  color: var(--title-color);

  font-size: 14px;
  font-weight: 700;

  line-height: 17px;
  text-transform: uppercase;

  @media (min-width: 500px) {
    width: 340px;
    margin: 10px auto;
  }
`
const Container = styled.div`
  width: 90%;
  height: 325px;
  box-sizing: border-box;

  border-radius: 4px;
  display: flex;
  margin: 10px 5%;

  background-color: white;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }
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
            Total={formatCurrency(
              productData.subTotal + productData.shippingTotal - productData.discount
            )}
          />
        ) : (
          <p>não encontrado</p>
        )}
      </div>

      <ButtonToPayment />
    </>
  )
}

export default BasketPage
