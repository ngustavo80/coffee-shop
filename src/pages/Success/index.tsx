import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import illustration from '../../assets/Illustration.svg'
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
              <p>Entregar em <strong>Alameda Monte Belo, 57</strong><br/>
              Largo da Batalha, Niterói - RJ</p>
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
              <strong>Cartão de crédito</strong></p>
            </DetailsDescription>
          </div>
        </DeliveryDetails>

        <img src={illustration} alt="" />
      </MainContainer>
    </SuccessPageContainer>
  )
}