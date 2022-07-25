import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
  width: 96%;
  margin: 2%;

  border-radius: 3px;
  border: 1px solid #eee;
`
const InfoList = styled.ul`
  display: flex;
`
const ProductImg = styled.img`
  height: 65px;
  width: 65px;
`

const ProductInfo = styled.li`
  width: 80%;
  height: 85px;
`

const ProductTitle = styled.h3`
  height: 70px;
  width: 100%;
  color: #212122;
  font-size: 13px;

  text-align: right;
`

const ProductPrice = styled.span`
  height: 14px;
  width: 100%;
  color: #212122;

  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`

function ContainerBox(props) {
  return (
    <ProductContainer>
      <InfoList>
        <ProductImg src={props.ProductImage} />
        <ProductInfo>
          <ProductTitle>{props.ProductDescription}</ProductTitle>
          <ProductPrice>{props.ProductPrice}</ProductPrice>
        </ProductInfo>
      </InfoList>
    </ProductContainer>
  )
}

export default ContainerBox
