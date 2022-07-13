import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
  height: 90px;
  width: 335px;

  border: 1px solid green;
`
const InfoList = styled.ul`
  display: flex;
  padding: 10px;
`
const ProductImg = styled.li`
  height: 65px;
  width: 65px;

  border: 1px solid aquamarine;
`

const ProductInfo = styled.li`
  width: 240px;
  height: 65px;
  padding-left: 15px;

  border: 1px solid blue;
`

const ProductTitle = styled.li`
  height: 32px;
  width: 220px;
  color: #212122;
  font-size: 13px;

  border: 1px solid yellow;
`

const ProductPrice = styled.li`
  height: 17px;
  width: 220px;
  color: #212122;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 700;
  text-align: right;

  border: 1px solid blue;
`

function ContainerBox(props) {
  return (
    <ProductContainer>
      <InfoList>
        <ProductImg></ProductImg>
        <ProductInfo>
          <ProductTitle>{props.ProductDescription}</ProductTitle>
          <ProductPrice>{props.ProductPrice}</ProductPrice>
        </ProductInfo>
      </InfoList>
    </ProductContainer>
  )
}

export default ContainerBox
