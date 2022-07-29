import styled from 'styled-components'

export const TotalProducts = styled.div`
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
export const Infos = styled.ul`
  display: flex;
  text-transform: uppercase;
  height: 17px;
  font-size: 14px;

  line-height: 17px;
  margin: 8px;
`
export const InfoPrice = styled.li`
  width: 50%;

  color: var(--text-color);
`
export const Price = styled.li`
  width: 50%;
  color: var(--text-color);

  text-align: right;
`
export const InfoDiscount = styled.li`
  width: 50%;

  color: var(--selected-color);
`
export const PriceDiscount = styled.li`
  width: 50%;
  color: var(--selected-color);

  text-align: right;
`
export const Total = styled.li`
  width: 50%;
  color: var(--text-color);

  font-weight: 700;
  margin-top: 8px;
`

export const TotalPrice = styled.li`
  width: 50%;
  color: var(--text-color);

  font-weight: 700;
  margin-top: 8px;
  text-align: right;
`
