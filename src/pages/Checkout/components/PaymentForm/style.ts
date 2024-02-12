import styled from "styled-components"


export const PaymentFormWrapper = styled.div`
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