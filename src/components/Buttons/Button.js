import React from 'react'
import * as S from './styles'

function Button(props) {
  return (
    <S.ButtonStyle onClick={props.onClick}>
      <S.ButtonText>{props.text}</S.ButtonText>
    </S.ButtonStyle>
  )
}

export default Button
