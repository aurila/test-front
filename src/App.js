import React, { useEffect, useState } from 'react'
import Router from './router/router'
import { ContextPriceDetails } from './context/ContextPriceDetails'
import axios from 'axios'
import { GlobalStyles } from './styles'

const App = () => {
  const [productData, setProductData] = useState()

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => {
        setProductData(response.data)
      })
      .catch(console.error)
  }, [])

  return (
    <>
      <GlobalStyles />
      <ContextPriceDetails.Provider value={productData}>
        <Router />
      </ContextPriceDetails.Provider>
    </>
  )
}

export default App
