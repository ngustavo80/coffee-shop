import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    margin: 2rem 0 2rem 0;

    .location {
      display: flex;
      align-items: center;
      gap: 4px;

      padding: 0.5rem;

      background: ${props => props.theme['purple-100']};
      border-radius: 6px;

      color: ${props => props.theme['purple-800']};

      span {
        font-size: 0.875;
      }
    }

    .cart {
      background: ${props => props.theme['yellow-100']};
      padding: 0.5rem;
      border-radius: 6px;

      color: ${props => props.theme['yellow-800']};
    }
  }
`