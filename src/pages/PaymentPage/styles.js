import styled from 'styled-components'

export const ContainerTitle = styled.p`
  height: 17px;
  width: 90%;
  margin-left: 5%;
  color: var(--title-color);

  font-size: 14px;
  font-weight: 700;

  line-height: 17px;
  text-transform: uppercase;

  @media (min-width: 500px) {
    width: 340px;
    margin: 10px auto;
  }
`
export const Container = styled.div`
  width: 90%;
  height: 279px;
  box-sizing: border-box;
  padding: 5px;

  border-radius: 4px;

  margin: 10px 5%;

  background-color: white;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }
`
