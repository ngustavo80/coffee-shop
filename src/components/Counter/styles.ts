import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme['gray-400']};
  text-align: center;

  button {
    display: flex;
    align-items: center;

    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.theme['purple-800']};
  }

  span {
    flex: 1;
  }
`