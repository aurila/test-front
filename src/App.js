import React from 'react'

import Router from './router/router'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html{
  --selected-color: #FF7800;
  --unselected-color: #CCC;
  --title-color: #999;
  --neutral-background: #fff;
  --border-color-container: #EEE;
  --border-color-price: #CCC;
  --text-color: #212122;
  --button-color: #FF6C00;
  --button-hover-color: #D45A00;

  background-color: #EEE;


  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
}

`

const App = () => (
  <>
    <GlobalStyles />
    <Router />
  </>
)

export default App
