import styled from 'styled-components'

export const ProductContainer = styled.div`
  width: 96%;
  height: 90px;
  margin: 10px 2% 10px 2%;

  border-radius: 3px;
  border: 1px solid #eee;
`
export const InfoList = styled.ul`
  display: flex;
`
export const ProductImg = styled.img`
  height: 65px;
  width: 65px;
`

export const ProductInfo = styled.li`
  width: 80%;
`

export const ProductTitle = styled.h3`
  height: 50px;
  width: 100%;
  color: #212122;
  font-size: 13px;
  text-align: right;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const ProductPrice = styled.span`
  height: 14px;
  width: 100%;
  color: #212122;

  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: flex-end;
  text-align: right;
`
