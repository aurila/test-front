import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
  height: 95px;
  width: 330px;
  margin-bottom: 10px;

  border-radius: 3px;
  border: 1px solid #eee;
`
const InfoList = styled.ul`
  display: flex;
  padding: 10px;
`
const ProductImg = styled.img`
  height: 65px;
  width: 65px;
`

const ProductInfo = styled.li`
  width: 240px;
  height: 85px;
  padding-left: 15px;
`

const ProductTitle = styled.h3`
  height: 60px;
  width: 220px;
  color: #212122;
  font-size: 13px;
`

const ProductPrice = styled.span`
  height: 17px;
  width: 220px;
  color: #212122;

  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
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
