import styled from "styled-components";

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    gap: 2rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.3;
      margin:  2.5rem 0 1rem 0;
      color: ${props => props.theme['gray-800']}
    }
  }
`

export const AddressPaymentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Address = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${props => props.theme['gray-200']};

  legend {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    
    div {
      display: flex;
      flex-direction: column;
      padding-top: 2px;
    }
  }
`

export const AddressForm = styled.fieldset`

`

export const Payment = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${props => props.theme['gray-200']};

  legend {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    
    div {
      display: flex;
      flex-direction: column;
      padding-top: 2px;
    }
  }
`

export const PaymentForm = styled.fieldset``

export const RadioInputWrapper = styled.label`
`

export const ConfirmOrderWrapper = styled.section`
  width: 29rem;
  padding: 2.5rem;
  border-radius: 0 100px 0 100px;

  background: ${props => props.theme['gray-200']};
`

export const ConfirmOrder = styled.div`
   
`