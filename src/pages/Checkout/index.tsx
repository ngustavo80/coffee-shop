import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { 
  Address, 
  AddressForm, 
  AddressFormTitle, 
  AddressPaymentWrapper, 
  CheckoutContainer, 
  ConfirmOrder, 
  ConfirmOrderWrapper, 
  Payment, 
  PaymentForm, 
  PaymentFormTitle,
  RadioInputWrapper
} from "./styles";

export function Checkout () {
  return (
    <CheckoutContainer>
      <form onSubmit={e => {e.preventDefault}}>
        <section>
          <h1>Complete seu pedido</h1>
          <AddressPaymentWrapper>
            <Address>
              <AddressFormTitle>
                  <MapPinLine size={22} />
                <div>
                  <strong>Endereço de entrega</strong>
                  <span>Informe o endereço em que deseja receber seu pedido</span>
                </div>
              </AddressFormTitle>

              <AddressForm>
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Rua" />
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </AddressForm>
            </Address>

            <Payment>
              <PaymentFormTitle>
                  <CurrencyDollar size={22} />
                <div>
                  <strong>Pagamento</strong>
                  <span>O pagamento é feito na entrega.Escolha a forma que deseja pagar.</span>
                </ div>
              </PaymentFormTitle>

              <PaymentForm>
                <RadioInputWrapper>
                  <input type="radio" name="paymentMethod" id="creditCard" value="creditCard" />
                  <label htmlFor="creditCard">
                    <CreditCard size={16} />
                    <p>Cartão de crédito</p>
                  </label>
                </RadioInputWrapper>

                <RadioInputWrapper>
                  <input type="radio" name="paymentMethod" id="debitCard" value="debitCard" />  
                  <label htmlFor="debitCard">
                    <Bank size={16} />
                    <p>Cartão de débito</p>
                  </label>
                </RadioInputWrapper>

                <RadioInputWrapper>
                  <input type="radio" name="paymentMethod" id="currency" value="currency" />
                  <label htmlFor="currency">
                    <Money size={16} />
                    <p>Dinheiro</p>
                  </label>
                </RadioInputWrapper>
                
              </PaymentForm>
            </Payment>
          </AddressPaymentWrapper>
        </section>

        <section>
          <h1>Cafés selecionados</h1>
          <ConfirmOrderWrapper>
            
            <ConfirmOrder></ConfirmOrder>
          </ConfirmOrderWrapper>
        </section>
      </form>
    </CheckoutContainer>
  )
}