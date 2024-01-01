import styled from "styled-components";

export const CoffeeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  margin-bottom: 9.8rem;

  h1 {
    width: 256px;
    border: 1px solid red;
    height: 310px;
  }
`