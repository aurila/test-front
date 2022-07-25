import React from 'react'
import styled from 'styled-components'
import ConfirmInfo from '../components/ConfirmInfo/ConfirmInfo'
import ConfirmMessage from '../components/ConfirmInfo/ConfirmMessage'
import ContainerBox from '../components/ContainerProducts/ContainerBoxProduct'
import PriceDetails from '../components/PriceDetails/PriceDetails'

const ContainerTitle = styled.p`
  height: 17px;
  width: 90%;
  margin-left: 5px;
  color: var(--title-color);

  font-size: 14px;
  font-weight: 700;

  line-height: 17px;
  text-transform: uppercase;

  @media (min-width: 500px) {
    width: 340px;
    margin: 5px auto;
  }
`
const Container = styled.div`
  width: 90%;
  height: 325px;
  box-sizing: border-box;

  border-radius: 4px;
  margin: 10px 5%;

  background-color: white;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }
`

function ConfirmPage() {
  return (
    <>
      <ConfirmMessage />
      <ContainerTitle>Pagamento</ContainerTitle>
      <ConfirmInfo />
      <ContainerTitle>Produtos</ContainerTitle>
      <Container>
        <div>
          <ContainerBox
            key=""
            ProductImage="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            ProductDescription="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium"
          />
        </div>
        <ContainerBox
          ProductImage="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg"
          ProductDescription="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
        />
        <ContainerBox
          ProductImage="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png"
          ProductDescription="Senscience Inner Restore Intensif - Máscara Capilar 50ml"
        />
      </Container>
      <PriceDetails
        ProductsSum="R$ 624,80"
        ShippingPrice="R$ 5,30"
        Discount="R$ 30,00"
        Total="R$ 600,10"
      />
    </>
  )
}

export default ConfirmPage
