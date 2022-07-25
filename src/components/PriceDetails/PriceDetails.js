import React from 'react'
import styled from 'styled-components'

const TotalProducts = styled.div`
  height: 129px;
  width: 90%;
  margin: 10px auto;

  border-radius: 3px;
  border: 1px solid #ccc;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }
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
  width: 50%;

  color: var(--text-color);
`
const Price = styled.li`
  width: 50%;
  color: var(--text-color);

  text-align: right;
`
const InfoDiscount = styled.li`
  width: 50%;

  color: var(--selected-color);
`
const PriceDiscount = styled.li`
  width: 50%;
  color: var(--selected-color);

  text-align: right;
`
const Total = styled.li`
  width: 50%;
  color: var(--text-color);

  font-weight: 700;
  margin-top: 8px;
`

const TotalPrice = styled.li`
  width: 50%;
  color: var(--text-color);

  font-weight: 700;
  margin-top: 8px;
  text-align: right;
`

export const PriceContext = React.createContext({})

function PriceDetails(props) {
  return (
    <PriceContext.Provider value={props}>
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
    </PriceContext.Provider>
  )
}

export default PriceDetails
