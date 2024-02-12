import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { PaymentFormWrapper, RadioInputWrapper } from './style'
import { useFormContext } from 'react-hook-form'

export function PaymentForm() {
  const { register } = useFormContext()

  return (
    <PaymentFormWrapper>
      <RadioInputWrapper>
        <input type="radio" {...register('paymentMethod')} id="creditCard" value="creditCard" />
        <label htmlFor="creditCard">
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </label>
      </RadioInputWrapper>

      <RadioInputWrapper>
        <input type="radio" {...register('paymentMethod')} id="debitCard" value="debitCard" />  
        <label htmlFor="debitCard">
          <Bank size={16} />
          <p>Cartão de débito</p>
        </label>
      </RadioInputWrapper>

      <RadioInputWrapper>
        <input type="radio" {...register('paymentMethod')} id="currency" value="currency" />
        <label htmlFor="currency">
          <Money size={16} />
          <p>Dinheiro</p>
        </label>
      </RadioInputWrapper>
    </PaymentFormWrapper>
  )
}