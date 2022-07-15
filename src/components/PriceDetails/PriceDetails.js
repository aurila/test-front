import React from 'react'
import styled from 'styled-components'

const TotalProducts = styled.div`
  height: 129px;
  width: 341px;
  margin: 10px;

  border-radius: 3px;
  border: 1px solid #ccc;
`
const Infos = styled.ul`
  display: flex;
  text-transform: uppercase;
  height: 17px;
  font-size: 14px;

  line-height: 17px;
  margin: 8px;
`
const InfoPrice = styled.li`
  width: 160px;

  color: var(--text-color);
`
const Price = styled.li`
  width: 160px;
  color: var(--text-color);

  text-align: right;
`
const InfoDiscount = styled.li`
  width: 160px;

  color: var(--selected-color);
`
const PriceDiscount = styled.li`
  width: 160px;
  color: var(--selected-color);

  text-align: right;
`
const Total = styled.li`
  width: 160px;
  color: var(--text-color);

  font-weight: 700;
  margin-top: 8px;
`

const TotalPrice = styled.li`
  width: 160px;
  color: var(--text-color);

  font-weight: 700;
  margin-top: 8px;
  text-align: right;
`

function PriceDetails(props) {
  return (
    <TotalProducts>
      <Infos>
        <InfoPrice>Produtos</InfoPrice>
        <Price>{props.ProductsSum}</Price>
      </Infos>
      <Infos>
        <InfoPrice>Frete</InfoPrice>
        <Price>{props.ShippingPrice}</Price>
      </Infos>
      <Infos>
        <InfoDiscount>Desconto</InfoDiscount>
        <PriceDiscount>{props.Discount}</PriceDiscount>
      </Infos>
      <Infos>
        <Total>Total</Total>
        <TotalPrice>{props.Total}</TotalPrice>
      </Infos>
    </TotalProducts>
  )
}

export default PriceDetails
