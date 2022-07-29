import React from 'react'
import * as S from './styles'

export default function CreditCardFunction() {
  return (
    <div>
      <S.CreditCard>
        <S.CardInfo for="cardnumber">
          Número do cartão:
          <S.CreditCardNumber id="cardnumber" type="tel" name="number" />
        </S.CardInfo>
        <S.CardInfo for="cardholdername">
          Nome do Titular:
          <S.CardHolderName
            placeholder="Como no Cartão"
            id="cardholdername"
            type="string"
            name="name"
          />
        </S.CardInfo>
        <S.DivInput>
          <S.DivValidity>
            <S.CardInfo for="validity">
              Validade(mês/ano):
              <S.CreditCardValidity id="validity" type="data" name="expiry" />
            </S.CardInfo>
          </S.DivValidity>

          <S.CardInfo for="cvv">
            {' '}
            CVV:
            <S.CreditCardCVV id="cvv" type="tel" name="cvv" />
          </S.CardInfo>
        </S.DivInput>
      </S.CreditCard>
    </div>
  )
}
