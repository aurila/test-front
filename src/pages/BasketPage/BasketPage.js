import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContainerBox from '../../components/ContainerProducts/ContainerBoxProduct'
import PriceDetails from '../../components/PriceDetails/PriceDetails'
import { ContextPriceDetails } from '../../context/ContextPriceDetails'
import { formatCurrency } from '../../utils/currency'
import Button from '../../components/Buttons/Button'
import * as S from './styles'

function BasketPage() {
  const navigate = useNavigate()
  const productData = useContext(ContextPriceDetails)
  return (
    <>
      <S.ContainerTitle>Produtos</S.ContainerTitle>
      <S.Container>
        <div>
          {productData ? (
            productData.items.map((item) => (
              <ContainerBox
                key={item.product.sku}
                ProductImage={item.product.imageObjects[0].thumbnail}
                ProductDescription={item.product.name}
                ProductPrice={formatCurrency(item.product.priceSpecification.price)}
              />
            ))
          ) : (
            <p>nenhum produto encontrado</p>
          )}
        </div>
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

      <Button text="Seguir para o pagamento" onClick={() => navigate('/payment')} />
    </>
  )
}

export default BasketPage
