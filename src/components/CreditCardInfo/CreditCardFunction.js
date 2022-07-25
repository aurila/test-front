import React from 'react'
import styled from 'styled-components'

const CreditCard = styled.form`
  width: 96%;
  height: 279px;
  padding: 2%;
  font-size: 12px;
  font-weight: bold;
`
const CardInfo = styled.label`
  color: #ccc;
`

const CreditCardNumber = styled.input`
  width: 90%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: rgba(0, 0, 0, 0.2);
  margin: 5px 10px 25px auto;
`

const CardHolderName = styled.input`
  width: 90%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: rgba(0, 0, 0, 0.2);
  margin: 5px 10px 25px auto;

  &::placeholder {
    color: #ccc;
  }
`
const CreditCardValidity = styled.input`
  width: 80%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: rgba(0, 0, 0, 0.2);
  display: flex;
  align-content: flex-start;
  margin: 5px;
`
const CreditCardCVV = styled.input`
  width: 70%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-content: flex-end;
  margin: 5px;
`
const DivInput = styled.div`
  display: flex;
`
const DivValidity = styled.div`
  width: 70%;
`

export default function CreditCardFunction() {
  return (
    <div>
      <CreditCard>
        <CardInfo for="cardnumber">
          Número do cartão:
          <CreditCardNumber id="cardnumber" type="tel" name="number" />
        </CardInfo>
        <CardInfo for="cardholdername">
          Nome do Titular:
          <CardHolderName
            placeholder="Como no Cartão"
            id="cardholdername"
            type="string"
            name="name"
          />
        </CardInfo>
        <DivInput>
          <DivValidity>
            <CardInfo for="validity">Validade(mês/ano):</CardInfo>
            <CreditCardValidity id="validity" type="" name="expiry" />
          </DivValidity>

          <CardInfo for="cvv">
            CVV:
            <CreditCardCVV id="cvv" type="tel" name="cvc" />
          </CardInfo>
        </DivInput>
      </CreditCard>
    </div>
  )
}
