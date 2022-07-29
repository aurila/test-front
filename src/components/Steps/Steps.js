import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

function Steps() {
  const navigate = useNavigate()
  return (
    <S.StepsContainer>
      <S.StepsOptions onClick={() => navigate('/')}>Sacola</S.StepsOptions>
      <S.StepsOptions onClick={() => navigate('/payment')}>Pagamento</S.StepsOptions>
      <S.StepsOptions onClick={() => navigate('/confirm')}>Confirmação</S.StepsOptions>
    </S.StepsContainer>
  )
}

export default Steps
