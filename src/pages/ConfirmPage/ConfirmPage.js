import React, { useContext } from 'react'
import ConfirmInfo from '../../components/ConfirmInfo/ConfirmInfo'
import ConfirmMessage from '../../components/ConfirmMessage/ConfirmMessage'
import ContainerBox from '../../components/ContainerProducts/ContainerBoxProduct'
import PriceDetails from '../../components/PriceDetails/PriceDetails'
import { ContextPriceDetails } from '../../context/ContextPriceDetails'
import { formatCurrency } from '../../utils/currency'
import * as S from './styles'

function ConfirmPage() {
  const productData = useContext(ContextPriceDetails)

  return (
    <>
      <ConfirmMessage />
      <S.ContainerTitle>Pagamento</S.ContainerTitle>
      <ConfirmInfo />
      <S.ContainerTitle>Produtos</S.ContainerTitle>
      <S.Container>
        {productData ? (
          productData.items.map((item) => (
            <ContainerBox
              key={item.product.sku}
              ProductImage={item.product.imageObjects[0].thumbnail}
              ProductDescription={item.product.name}
            />
          ))
        ) : (
          <p>nenhum produto encontrado</p>
        )}
      </S.Container>
      <div>
        {productData ? (
          <PriceDetails
            ProductsSum={formatCurrency(productData.subTotal)}
            ShippingPrice={formatCurrency(productData.shippingTotal)}
            Discount={formatCurrency(productData.discount)}
            Total={formatCurrency(
              productData.subTotal + productData.shippingTotal - productData.discount
            )}
          />
        ) : (
          <p>não encontrado</p>
        )}
      </div>
    </>
  )
}

export default ConfirmPage
