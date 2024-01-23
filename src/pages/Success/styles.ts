import styled from "styled-components";

export const SuccessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;

    color: ${props => props.theme['yellow-800']}
  }
  
  span {
    font-size: 1.5rem;

    color: ${props => props.theme['gray-800']};
  }
`

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  gap: 6rem;

  img {
    width: 32rem;
  }
`

export const DeliveryDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 2.5rem;
  gap: 2rem;
  background: linear-gradient(rgba(250,250,250,1), rgba(250,250,250,1)) padding-box,
              linear-gradient(to right, rgba(219,172,44,1), rgba(128,71,248,1)) border-box;
  border-radius: 6px 50px 6px 50px;
  border: 1px solid transparent;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

const BaseDetailsLogo = styled.div`
  padding: 0.5rem;
  color: ${props => props.theme['white']};
  border-radius: 50%;
  height: 2rem;
`
export const AddressDetailsLogo = styled(BaseDetailsLogo)`
  background: ${props => props.theme['purple-400']};
`

export const TimeDetailsLogo = styled(BaseDetailsLogo)`
  background: ${props => props.theme['yellow-400']};
`

export const PaymentDetailsLogo = styled(BaseDetailsLogo)`
  background: ${props => props.theme['yellow-800']};
`

export const DetailsDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme['gray-700']};

  strong {
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme['gray-700']};
  }
`