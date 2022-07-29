import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`
export const Icon = styled.div`
  color: var(--selected-color);
  font-size: 40px;
`

export const Message = styled.p`
  color: var(--selected-color);
  font-weight: bold;
  width: 90%;

  text-align: center;

  @media (min-width: 500px) {
    width: 300px;
    margin: 10px auto;
  }
`
