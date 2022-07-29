import styled from 'styled-components'

export const ButtonStyle = styled.button`
  height: 60px;
  width: 90%;
  background-color: var(--button-color);
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 0 -3px 0 0 var(--button-hover-color) inset;
  border: 1px solid var(--button-color);
  border-radius: 3px;
  margin: 10px auto;
  display: flex;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }

  &:hover {
    background-color: var(--button-hover-color);
  }
`

export const ButtonText = styled.p`
  height: 24px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 24px;

  margin: auto;
  text-transform: uppercase;
`
