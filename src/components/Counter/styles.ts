import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  width: 5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme['gray-400']};

  button, input {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  button {
    line-height: none;
    color: ${props => props.theme['purple-800']};
  }

  input {
    text-align: center;
  }
`