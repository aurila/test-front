import React from 'react'
import styled from 'styled-components'
import ButtonConfirm from '../components/Buttons/ButtonConfirm'

import CreditCardFunction from '../components/CreditCardInfo/CreditCardFunction'

import PriceDetails from '../components/PriceDetails/PriceDetails'

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
  height: 279px;
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

function PaymentPage() {
  return (
    <div>
      <ContainerTitle>Cartão de crédito</ContainerTitle>
      <Container>
        <CreditCardFunction />
      </Container>

      <PriceDetails
        ProductsSum="R$ 624,80"
        ShippingPrice="R$ 5,30"
        Discount="R$ 30,00"
        Total="R$ 600,10"
      />
      <ButtonConfirm />
    </div>
  )
}

export default PaymentPage
//usestate
