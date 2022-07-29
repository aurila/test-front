import styled from 'styled-components'

export const CreditCard = styled.form`
  width: 96%;
  height: 279px;
  padding: 2%;
  font-size: 12px;
  font-weight: bold;
`
export const CardInfo = styled.label`
  color: #ccc;
  margin-left: 10px;
`

export const CreditCardNumber = styled.input`
  width: 96%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin: 5px 2% 15px 2%;
  padding-left: 13px;

  &::placeholder {
    color: var(--placeholder-color);
    letter-spacing: 1.37px;
    font-size: 16px;
  }
`

export const CardHolderName = styled.input`
  width: 96%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin: 5px 2% 15px 2%;
  padding-left: 13px;

  &::placeholder {
    color: var(--placeholder-color);
    font-size: 16px;
  }
`
export const CreditCardValidity = styled.input`
  width: 80%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  align-content: flex-start;
  margin: 5px;
  padding-left: 13px;

  &::placeholder {
    color: var(--placeholder-color);
    letter-spacing: 1.37px;
    font-size: 16px;
  }
`
export const CreditCardCVV = styled.input`
  width: 90%;
  height: 45px;
  border-radius: 3px;
  border: 1px solid #e7e7e7;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  margin: 5px;
  padding-left: 13px;

  &::placeholder {
    color: var(--placeholder-color);
    letter-spacing: 1.37px;
    font-size: 16px;
  }
`
export const DivInput = styled.div`
  display: flex;
`
export const DivValidity = styled.div`
  width: 70%;
`
