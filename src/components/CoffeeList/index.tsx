import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { Trash } from '@phosphor-icons/react'
import { ShoppingCart } from '@phosphor-icons/react'

import { Counter } from '../Counter'
import { coffees } from '../../coffees'
import { CartContext } from '../../contexts/CartContext'

import { 
  CoffeeWrapper, 
  CoffeeCard, 
  Tags, 
  BuyContainer, 
  Price, 
  Buy,
  SelectedCoffeeList, 
  SelectedCoffee,
  Remove,
  Separator,
  Buttons,
  Info,
} from './styles'

interface CoffeeListProps {
  isListOnCart: boolean;
}

export function CoffeeList({ isListOnCart }: CoffeeListProps) {
  const { cart, removeItemFromCart } = useContext(CartContext)

  function handleRemoveItemFromCart(itemId: string) {
    removeItemFromCart(itemId)
  }

  return (
    <div>
      { isListOnCart ? 
        <div>
          {cart.map(item => {
            return (
              <div key={item.id}>
                <SelectedCoffeeList>
                  <img src={item?.image} alt="" />
                  <SelectedCoffee>
                    <Info>
                      <span>
                        {item.name}
                      </span>
                      <p>
                        {`R$ ${item.price}`}
                      </p>
                    </Info>

                    <Buttons>
                      <Counter coffee={item} counterInCartList={true} />
                      <Remove type="button" onClick={() => handleRemoveItemFromCart(item.id)}>
                        <Trash size={16} />
                        REMOVER
                      </Remove>
                    </Buttons>
                  </SelectedCoffee>
                </SelectedCoffeeList>

                <Separator />
              </div>
            )
          })}
        </div> 
      : 
        <div>
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
                      <Counter coffee={coffee} counterInCartList={false} />
                      <NavLink to="/checkout">
                        <ShoppingCart size={22} weight='fill' />
                      </NavLink>
                    </Buy>
                  </BuyContainer>
                </CoffeeCard>
              )
            })}
          </CoffeeWrapper>
        </div> 
      }
    </div>
  )
}