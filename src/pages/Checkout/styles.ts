import styled from "styled-components";

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    gap: 2rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      margin:  2.5rem 0 1rem 0;
      color: ${props => props.theme['gray-800']}
    }
  }
`

const FormTitle = styled.legend`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  div {
    display: flex;
    flex-direction: column;
    padding-top: 2px;

    strong {
      color: ${props => props.theme['gray-800']};
    }

    span {
      color: ${props => props.theme['gray-700']};
      font-size: 0.875rem;
    }
  }
`

export const AddressPaymentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

// --------------------------ADDRESS FORM--------------------------------
export const Address = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${props => props.theme['gray-200']};
`

export const AddressFormTitle = styled(FormTitle)`
  svg {
    color: ${props => props.theme['yellow-800']};
  }
`

export const AddressForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    background: ${props => props.theme['gray-300']};

    padding: 0.75rem;
    border: 1px solid ${props => props.theme['gray-400']};
    border-radius: 6px;

    color: ${props => props.theme['gray-700']};
    font-size: 0.875rem;
  }

  input[name="zipCode"], input[name="number"], input[name="neighborhood"] {
    width: 6rem;
  }

  input[name="state"] {
    max-width: 4rem;
    text-transform: uppercase;
  }

  input[name="complement"], input[name="city"] {
    flex: 1;
  }
`
// ----------------------------------------------------------------------------


// --------------------------PAYMENTFORM----------------------------------------
export const Payment = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${props => props.theme['gray-200']};
`

export const PaymentFormTitle = styled(FormTitle)`
  svg {
    color: ${props => props.theme['purple-400']};
  }
`

export const PaymentForm = styled.fieldset`
  display: flex;
  border: none;
  gap: 0.75rem;
`

export const RadioInputWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  flex-grow: 1;

  background: ${props => props.theme['gray-400']};


  label {
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 6px;
    width: 100%;
    cursor: pointer;

    p {
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${props => props.theme['gray-700']};
    }

    svg {
      color: ${props => props.theme['purple-400']}
    }
  }


  input[type="radio"] {
    appearance: none;
    display: none;
  }

  input[type="radio"]:checked + label {
    background: ${props => props.theme['purple-100']};
    outline: 1px solid ${props => props.theme['purple-800']};
  }

  input[type="radio"]:focus {
    box-shadow: none;
  }
`
// ----------------------------------------------------------------------------

export const ConfirmOrderWrapper = styled.section`
  width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px;

  background: ${props => props.theme['gray-200']};
`

export const CoffeeCart = styled.div`
   display: flex;
   align-items: center;
   gap: 1.25rem;

   img {
    width: 4rem;
   }
`

export const SelectedCoffee = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme['gray-800']};
  }

  p {
    color: ${props => props.theme['gray-700']};
    font-weight: 700;
  }
`

export const Buttons = styled.div`
  display: flex;
   gap: 0.5rem;
`

export const Remove = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  background: ${props => props.theme['gray-400']};
  color: ${props => props.theme['gray-700']};

  border: none;
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: none;

  text-transform: uppercase;
  cursor: pointer;

  svg {
    color: ${props => props.theme['purple-400']}
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 2px;

  margin: 1.5rem 0 1.5rem 0;

  background: ${props => props.theme['gray-400']};
`
export const FinishDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${props => props.theme['gray-700']};
    }
  }
`

export const Total = styled.div`
 strong {
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme['gray-800']};
 }
`

export const ConfirmButton = styled.button`
  background: ${props => props.theme['yellow-400']};
  color: ${props => props.theme['white']};

  margin-top: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;

  cursor: pointer;
  text-transform: uppercase;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`