import styled from "styled-components";

//-------------------COFFEE ON HOMEW --------------------------------
export const CoffeeCard = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 0 1.15rem;
  border-radius: 0 50px 0 50px;

  background: ${props => props.theme['gray-200']};

  img {
    width: 7.5rem;
    margin: -1.25rem auto;
  }

  strong {
    margin-top: 1rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    margin-top: 0.5rem;

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;

    color: ${props => props.theme['gray-600']};
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 1.75rem;

  span {
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme['yellow-100']};
    color: ${props => props.theme['yellow-800']};
    border-radius: 999999px;

    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;

    text-transform: uppercase;
  }
`

export const BuyContainer = styled.div`
  margin: 2rem 0 1.25rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
  gap: 0.25rem;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme['gray-700']};
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme['gray-700']};
  }
`

export const Buy = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    border: none;

    padding: 0.5rem;
    border-radius: 8px;

    background: ${props => props.theme['purple-800']};
    color: ${props => props.theme['white']};
  }
`

//------------------------COFFEE ON CHECKOUT------------------------
export const SelectedCoffeeList = styled.div`
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