import React from 'react'
import * as S from './styles'

function ContainerBox(props) {
  return (
    <S.ProductContainer>
      <S.InfoList>
        <S.ProductImg src={props.ProductImage} />
        <S.ProductInfo>
          <S.ProductTitle>{props.ProductDescription}</S.ProductTitle>
          <S.ProductPrice>{props.ProductPrice}</S.ProductPrice>
        </S.ProductInfo>
      </S.InfoList>
    </S.ProductContainer>
  )
}

export default ContainerBox
