import React from 'react'
import styled from 'styled-components'

const ContainerConfirm = styled.div`
  width: 90%;
  height: 73px;
  box-sizing: border-box;

  border-radius: 4px;
  margin: 10px 5%;

  background-color: white;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }
`

function ConfirmInfo() {
  return (
    <>
      <ContainerConfirm>
        <p>****.****.****.1234 JOSÉ DA SILVA 05/2019</p>
      </ContainerConfirm>
    </>
  )
}

export default ConfirmInfo
