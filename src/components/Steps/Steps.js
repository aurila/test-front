import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
`
const StepsNames = styled.ul`
  margin: auto;
  display: flex;
`
const StepsOptions = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  text-transform: uppercase;

  text-decoration: none;
  margin: 10px;
  height: 16px;

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  color: var(--unselected-color);

  &:hover {
    color: var(--selected-color);
  }
`
//usar selecionado e não hover

function Steps() {
  const navigate = useNavigate()
  return (
    <StepsContainer>
      <StepsNames>
        <StepsOptions onClick={() => navigate('/')}>Sacola</StepsOptions>
        <StepsOptions onClick={() => navigate('/payment')}>Pagamento</StepsOptions>
        <StepsOptions onClick={() => navigate('/confirm')}>Confirmação</StepsOptions>
      </StepsNames>
    </StepsContainer>
  )
}

export default Steps
