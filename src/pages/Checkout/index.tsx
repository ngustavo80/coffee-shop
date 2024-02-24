import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { AddressForm } from "./components/AddressForm"
import { PaymentForm } from "./components/PaymentForm"

import { 
  CurrencyDollar,  
  MapPinLine, 
} from "@phosphor-icons/react"

import { 
  Fieldset, 
  AddressFormTitle, 
  AddressPaymentWrapper, 
  CheckoutContainer,  
  ConfirmOrderWrapper,  
  PaymentFormTitle,
  FinishDetails,
  Total,
  ConfirmButton,  
} from "./styles"
import { CoffeeList } from '../../components/CoffeeList'

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
          <CoffeeList isListOnCart={true} />
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