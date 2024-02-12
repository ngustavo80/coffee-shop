import styled from "styled-components";

export const AddressFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
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