import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
  const checkoutFormValidationSchema = zod.object({
    zipCode: zod.string()
      .min(8, 'Por favor, informe o CEP corretamente')
      .max(9, 'Por favor, informe o CEP corretamente'),
    street: zod.string().min(1, 'Campo obrigatório'),
    number: zod.string().min(1, 'Campo obrigatório'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Campo obrigatório'),
    city: zod.string().min(1, 'Campo obrigatório'),
    state: zod.string().min(2, 'Campo obrigatório').max(2),
    paymentMethod: zod.string().min(1, 'Campo obrigatório').max(50),
  })

  type addressFormData = zod.infer<typeof checkoutFormValidationSchema>

  const checkoutForm = useForm<addressFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'creditCard'
    }
  })

  const { handleSubmit } = checkoutForm

  function handleCheckoutFormSubmit(data: addressFormData) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <form id="checkoutForm" onSubmit={handleSubmit(handleCheckoutFormSubmit)}>
      <FormProvider {...checkoutForm} >
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
      </FormProvider>
      </form>

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

            <ConfirmButton type="submit" form="checkoutForm">
              CONFIRMAR PEDIDO
            </ConfirmButton>
          </FinishDetails>
        </ConfirmOrderWrapper>
      </section>
    </CheckoutContainer>
  )
}