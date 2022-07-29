import React from 'react'
import * as S from './styles'

function PriceDetails(props) {
  return (
    <S.TotalProducts>
      <S.Infos>
        <S.InfoPrice>Produtos</S.InfoPrice>
        <S.Price>{props.ProductsSum}</S.Price>
      </S.Infos>
      <S.Infos>
        <S.InfoPrice>Frete</S.InfoPrice>
        <S.Price>{props.ShippingPrice}</S.Price>
      </S.Infos>
      <S.Infos>
        <S.InfoDiscount>Desconto</S.InfoDiscount>
        <S.PriceDiscount>{props.Discount}</S.PriceDiscount>
      </S.Infos>
      <S.Infos>
        <S.Total>Total</S.Total>
        <S.TotalPrice>{props.Total}</S.TotalPrice>
      </S.Infos>
    </S.TotalProducts>
  )
}

export default PriceDetails
