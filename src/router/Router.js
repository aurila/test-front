import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Steps from '../components/Steps'
import BasketPage from '../pages/BasketPage'
import ConfirmPage from '../pages/ConfirmPage'
import PaymentPage from '../pages/PaymentPage'

function Router() {
  return (
    <BrowserRouter>
      <Steps />
      <Routes>
        <Route exact path="/" element={<BasketPage />} />
        <Route exact path="/confirm" element={<ConfirmPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router
