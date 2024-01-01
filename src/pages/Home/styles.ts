import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  margin: 5.75rem 0 5.75rem 0;
`

export const Separator = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 588px;

  gap: 4.125rem;
`

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;

    color: ${props => props.theme['gray-900']};
    line-height: 1.3;
  }

  span {
    font-family: Roboto;
    font-size: 1.25rem;
    font-weight: 400;

    color: ${props => props.theme['gray-800']};
    line-height: 1.3;
  }
`

export const CharacteristicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: center;

  span {
    color: ${props => props.theme['gray-700']};
    font-size: 1rem;
  }
`

export const BaseLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 50%;

  color: ${props => props.theme['white']};
`
export const CartLogo = styled(BaseLogoContainer)`
  background: ${props => props.theme['yellow-800']};
` 

export const PackageLogo = styled(BaseLogoContainer)`
  background: ${props => props.theme['gray-700']};
`

export const TimerLogo = styled(BaseLogoContainer)`
  background: ${props => props.theme['yellow-400']};
`

export const CoffeeLogo = styled(BaseLogoContainer)`
  background: ${props => props.theme['purple-400']};
`

export const CoffeeDeliveryMainImage = styled.img`
  max-width: 580px;
`