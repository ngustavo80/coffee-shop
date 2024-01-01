import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme['gray-100']};

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    margin: 2rem 0 2rem 0;

    .cart {
      background: ${props => props.theme['yellow-100']};
      padding: 0.5rem;
      border-radius: 6px;

      color: ${props => props.theme['yellow-800']};
    }
  }
`

const BaseLocationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;

  padding: 0.5rem;

  span {
    font-size: 0.875;
  }
`

export const LocationCardGranted = styled(BaseLocationCard)`
  background: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-800']};
`

export const LocationCardDenied = styled(BaseLocationCard)`
  background: ${props => props.theme['red-100']};
  color: ${props => props.theme['red-800']};
`