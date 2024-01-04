import { NavLink } from 'react-router-dom'
import { ShoppingCart } from '@phosphor-icons/react'



import { coffees } from '../../../../coffees'

import { 
  CoffeeWrapper, 
  CoffeeCard, 
  Tags, 
  BuyContainer, 
  Price, 
  Buy } from "./styles"
import { CoffeeCounter } from '../../../../components/CoffeeCounter'

export function CoffeeList() {
  return (
    <CoffeeWrapper>
      {coffees.map(coffee => {
        const cents = String(coffee.price.cents).padEnd(2, '0')

        return (
          <CoffeeCard key={coffee.id}>
            <img src={coffee.image} alt={coffee.description} />

            <Tags>
              { coffee.characteristics.length === 3 
              ? 
              <>
                <span>{coffee.characteristics[0]}</span>
                <span>{coffee.characteristics[1]}</span>
                <span>{coffee.characteristics[2]}</span>
              </>
              : coffee.characteristics.length === 2 
              ? 
              <>
                <span>{coffee.characteristics[0]}</span>
                <span>{coffee.characteristics[1]}</span>
              </>
              :
              <span>{coffee.characteristics[0]}</span>
            }
            </Tags>

            <strong>{coffee.name}</strong>
            <p>{coffee.description}</p>

            <BuyContainer>
              <Price>
                <p>R$</p>
                <span>{coffee.price.currency},{cents}</span>
              </Price>

              <Buy>
                <CoffeeCounter />

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