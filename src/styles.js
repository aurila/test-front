import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html{
  --selected-color: #FF7800;
  --unselected-color: #CCC;
  --title-color: #999;
  --neutral-background: #fff;
  --border-color-container: #EEE;
  --text-color: #212122;
  --button-color: #FF6C00;
  --button-hover-color: #D45A00;
  --placeholder-color: #E0E7EE;

  background-color: #EEE;


  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

`
