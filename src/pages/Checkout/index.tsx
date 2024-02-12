import { FormEvent } from "react"
import { coffees } from "../../coffees"

import { Counter } from "../../components/Counter"
import { AddressForm } from "./components/AddressForm"
import { PaymentForm } from "./components/PaymentForm"

import { 
  CurrencyDollar,  
  MapPinLine, 
  Trash
} from "@phosphor-icons/react"

import { 
  Fieldset, 
  AddressFormTitle, 
  AddressPaymentWrapper, 
  CheckoutContainer, 
  SelectedCoffeeList, 
  SelectedCoffee, 
  ConfirmOrderWrapper,  
  PaymentFormTitle,
  Remove,
  Separator,
  Buttons,
  Info,
  FinishDetails,
  Total,
  ConfirmButton,  
} from "./styles"


export function Checkout () {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleFormSubmit}>
        <section>
          <h1>Complete seu pedido</h1>
          <AddressPaymentWrapper>
            <Fieldset>
              <AddressFormTitle>
                  <MapPinLine size={22} />
                <div>
                  <strong>Endereço de entrega</strong>
                  <span>Informe o endereço em que deseja receber seu pedido</span>
                </div>
              </AddressFormTitle>

              <AddressForm />
            </Fieldset>

            <Fieldset>
              <PaymentFormTitle>
                  <CurrencyDollar size={22} />
                <div>
                  <strong>Pagamento</strong>
                  <span>O pagamento é feito na entrega.Escolha a forma que deseja pagar.</span>
                </ div>
              </PaymentFormTitle>

              <PaymentForm />
            </Fieldset>
          </AddressPaymentWrapper>
        </section>

        <section>
          <h1>Cafés selecionados</h1>
          <ConfirmOrderWrapper>

          <SelectedCoffeeList>
              <img src={coffees[0].image} alt="" />
              <SelectedCoffee>
                <Info>
                  <span>
                    {coffees[0].name}
                  </span>
                  <p>
                    {`R$ ${coffees[0].price}`}
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
            </SelectedCoffeeList>

            <Separator />

            <SelectedCoffeeList>
              <img src={coffees[4].image} alt="" />
              <SelectedCoffee>
                <Info>
                  <span>
                    {coffees[4].name}
                  </span>
                  <p>
                    {`R$ ${coffees[4].price}`}
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
            </SelectedCoffeeList>

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