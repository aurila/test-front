import React from 'react'
import styled from 'styled-components'

const Message = styled.p`
  color: var(--selected-color);
  font-weight: bold;
  width: 90%;
  height: 70px;
  margin-left: 5%;
  display: flex;
  text-align: center;

  @media (min-width: 500px) {
    width: 300px;
    margin: 10px auto;
  }
`

function ConfirmMessage() {
  return (
    <>
      <Message> COMPRA EFETUADA COM SUCESSO </Message>
    </>
  )
}
export default ConfirmMessage
