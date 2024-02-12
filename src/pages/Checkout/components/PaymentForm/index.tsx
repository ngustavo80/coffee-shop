import { CreditCard, Bank, Money } from '@phosphor-icons/react'
import { PaymentFormWrapper, RadioInputWrapper } from './style'

export function PaymentForm() {
  return (
    <PaymentFormWrapper>
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
    </PaymentFormWrapper>
  )
}