import { coffees } from "../../coffees"
import { Counter } from "../../components/Counter";
import { formatCents } from "../../utils/formatCents";
import { 
  Bank, 
  CreditCard, 
  CurrencyDollar,  
  MapPinLine, 
  Money,
  Trash
} from "@phosphor-icons/react";

import { 
  Address, 
  AddressForm, 
  AddressFormTitle, 
  AddressPaymentWrapper, 
  CheckoutContainer, 
  CoffeeCart, 
  SelectedCoffee, 
  ConfirmOrderWrapper, 
  Payment, 
  PaymentForm, 
  PaymentFormTitle,
  RadioInputWrapper,
  Remove,
  Separator,
  Buttons,
  Info,
  FinishDetails,
  Total,
  ConfirmButton,  
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
                <input type="text" placeholder="CEP" name="zipCode" />
                <input type="text" placeholder="Rua" name="Street" />
                <div>
                  <input type="text" placeholder="Número" name="number" />
                  <input type="text" placeholder="Complemento" name="complement" />
                </div>
                <div>
                  <input type="text" placeholder="Bairro" name="neighborhood" />
                  <input type="text" placeholder="Cidade" name="city" />
                  <input type="text" placeholder="UF" name="state" />
                </div>
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

          <CoffeeCart>
              <img src={coffees[0].image} alt="" />
              <SelectedCoffee>
                <Info>
                  <span>
                    {coffees[0].name}
                  </span>
                  <p>
                    {`R$ ${coffees[0].price.currency},${formatCents(coffees[0].price.cents)}`}
                  </p>
                </Info>

                <Buttons>
                  <Counter />
                  <Remove type="button">
                    <Trash size={16} />
                    REMOVER
                  </Remove>
                </Buttons>
              </SelectedCoffee>
            </CoffeeCart>
            <Separator />

            <CoffeeCart>
              <img src={coffees[4].image} alt="" />
              <SelectedCoffee>
                <Info>
                  <span>
                    {coffees[4].name}
                  </span>
                  <p>
                    {`R$ ${coffees[4].price.currency},${formatCents(coffees[4].price.cents)}`}
                  </p>
                </Info>

                <Buttons>
                  <Counter />
                  <Remove type="button">
                    <Trash size={16} />
                    REMOVER
                  </Remove>
                </Buttons>
              </SelectedCoffee>
            </CoffeeCart>
            <Separator />

            <FinishDetails>
              <div>
                <p>Total de itens</p>
                <p>R$ 19,00</p>
              </div>
              <div>
                <p>Entrega (taxa fixa)</p>
                <p>R$ 5,00</p>
              </div>

              <Total>
                <strong>Total</strong>
                <strong>R$ 24,00</strong>
              </Total>

              <ConfirmButton type="submit">
                CONFIRMAR PEDIDO
              </ConfirmButton>
            </FinishDetails>
          </ConfirmOrderWrapper>
        </section>
      </form>
    </CheckoutContainer>
  )
}