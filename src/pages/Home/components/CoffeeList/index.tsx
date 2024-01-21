import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '@phosphor-icons/react'

import { Counter } from '../../../../components/Counter'
import { coffees } from '../../../../coffees'

import { formatCents } from '../../../../utils/formatCents'

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
        // const cents = String(coffee.price.cents).padEnd(2, '0')

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
                <span>{coffee.price.currency},{formatCents(coffee.price.cents)}</span>
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