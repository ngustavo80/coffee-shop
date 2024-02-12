import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '@phosphor-icons/react'

import { Counter } from '../../../../components/Counter'
import { coffees } from '../../../../coffees'

import { 
  CoffeeWrapper, 
  CoffeeCard, 
  Tags, 
  BuyContainer, 
  Price, 
  Buy } from "./styles"

export function CoffeeList() {
  return (
    <CoffeeWrapper>
      {coffees.map(coffee => {
        return (
          <CoffeeCard key={coffee.id}>
            <img src={coffee.image} alt={coffee.description} />

            <Tags>
              {coffee.tags.map(tag => {
                return <span key={tag.id}>{tag.characteristic}</span>
              })}
            </Tags>

            <strong>{coffee.name}</strong>
            <p>{coffee.description}</p>

            <BuyContainer>
              <Price>
                <p>R$</p>
                <span>
                  {coffee.price}
                </span>
              </Price>

              <Buy>
                <Counter />

                <NavLink to="/checkout">
                  <ShoppingCart size={22} weight='fill' />
                </NavLink>
              </Buy>
            </BuyContainer>
          </CoffeeCard>
        )
      })}
    </CoffeeWrapper>
  )
}