import styled from 'styled-components'

export const StepsContainer = styled.div`
  display: flex;
  height: 40px;
  background-color: white;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  justify-content: space-around;
  align-items: center;

  @media (min-width: 500px) {
    width: 400px;
    margin: 10px auto;
  }
`
export const StepsNames = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StepsOptions = styled.div`
  text-transform: uppercase;

  text-decoration: none;
  height: 16px;

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  color: var(--unselected-color);

  &:hover {
    color: var(--selected-color);
  }
`
//usar selecionado e não hover
