import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${props => props.theme['gray-400']};
  text-align: center;

  span {
    flex: 1;
  }
`

export const ChangeQuantityButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;

  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme['purple-800']};
`