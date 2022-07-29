import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/Button'
import CreditCardFunction from '../../components/CreditCardInfo/CreditCardFunction'
import PriceDetails from '../../components/PriceDetails/PriceDetails'
import * as S from './styles'

function PaymentPage() {
  const navigate = useNavigate()
  return (
    <div>
      <S.ContainerTitle>Cartão de crédito</S.ContainerTitle>
      <S.Container>
        <CreditCardFunction />
      </S.Container>

      <PriceDetails
        ProductsSum="R$ 624,80"
        ShippingPrice="R$ 5,30"
        Discount="R$ 30,00"
        Total="R$ 600,10"
      />
      <Button text="Finalizar o pedido" onClick={() => navigate('/confirm')} />
    </div>
  )
}

export default PaymentPage
//usestate
