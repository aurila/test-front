import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Buttonstyle = styled.button`
  height: 60px;
  width: 341px;
  border-radius: 3px;
  background-color: var(--button-color);
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid var(--button-color);
  margin: 10px;

  &:hover {
    background-color: var(--button-hover-color);
  }
`

const ButtonText = styled.p`
  height: 24px;
  width: 339px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
`

function Button() {
  const navigate = useNavigate()
  return (
    <Buttonstyle>
      <ButtonText onClick={() => navigate('/payment')}>Seguir para o pagamento</ButtonText>
    </Buttonstyle>
  )
}

export default Button
