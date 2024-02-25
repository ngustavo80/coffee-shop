import { useContext } from 'react';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

import illustration from '../../assets/Illustration.svg'
import { CartContext } from '../../contexts/CartContext';

import { 
  AddressDetailsLogo, 
  DeliveryDetails, 
  DetailsDescription, 
  MainContainer, 
  PaymentDetailsLogo, 
  SuccessPageContainer, 
  TimeDetailsLogo 
} from "./styles";


export function Success() {
  const { address } = useContext(CartContext)

  return (
    <SuccessPageContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <span>Agora é só aguardar o café chegar até você</span>
    
      <MainContainer>
        <DeliveryDetails>
          <div>
            <AddressDetailsLogo>
              <MapPin size={16} weight='fill' />
            </AddressDetailsLogo>
            <DetailsDescription>
              <p>Entregar em <strong>{address.street}, {address.number}</strong><br/>
              {address.neighborhood}, {address.city} - {address.state}</p>
            </DetailsDescription>
          </div>

          <div>
            <TimeDetailsLogo>
              <Timer size={16} weight='fill' />
            </TimeDetailsLogo>
            <DetailsDescription>
              <p>Previsão de entrega <br/>
              <strong>20 min - 30min</strong></p>
            </DetailsDescription>
          </div>

          <div>
            <PaymentDetailsLogo>
              <CurrencyDollar size={16} />
            </PaymentDetailsLogo>
            <DetailsDescription>
              <p>Pagamento na entrega <br/>
              {address.paymentMethod === 'creditCard' ? 
                <strong>Cartão de crédito</strong> : 
              address.paymentMethod === 'debitCard' ? 
                <strong>Cartão de débito</strong> : 
              address.paymentMethod === 'currency' ? 
                <strong>Dinheiro</strong> : 
                <strong>Forma de pagamento não informada</strong>
              }
              </p>
            </DetailsDescription>
          </div>
        </DeliveryDetails>

        <img src={illustration} alt="" />
      </MainContainer>
    </SuccessPageContainer>
  )
}