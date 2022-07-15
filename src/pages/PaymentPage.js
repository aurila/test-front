import React from 'react'
import styled from 'styled-components'
import Button from '../components/Buttons/Button'
import PriceDetails from '../components/PriceDetails/PriceDetails'

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
  width: 347px;
  height: 341px;
  box-sizing: border-box;

  border-radius: 4px;
  display: flex;
  margin: 8px;

  position: relative;
  border: 1px solid red;
`

function PaymentPage() {
  return (
    <div>
      <ContainerTitle>Cartão de crédito</ContainerTitle>
      <Container></Container>
      <PriceDetails></PriceDetails>
      <Button></Button>
    </div>
  )
}

export default PaymentPage
//usestate
