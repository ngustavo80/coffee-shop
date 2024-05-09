import styled from  'styled-components'

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