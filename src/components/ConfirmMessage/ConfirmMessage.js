import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import * as S from './styles'

function ConfirmMessage() {
  return (
    <S.Wrapper>
      <S.Icon>
        <BsCheckCircle />
      </S.Icon>

      <S.Message> COMPRA EFETUADA COM SUCESSO </S.Message>
    </S.Wrapper>
  )
}
export default ConfirmMessage
