import { useContext, useState } from 'react'

import { Trash } from '@phosphor-icons/react'
import { ShoppingCart } from '@phosphor-icons/react'

import { Counter } from '../Counter'
import { CoffeeType } from '../../coffees'
import { CartContext } from '../../contexts/CartContext'

import { 
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
  Info
} from './styles'

interface CoffeeListProps {
  isListOnCart: boolean;
  coffee: CoffeeType;
}

export function CoffeeList({ coffee, isListOnCart }: CoffeeListProps) {
  const { removeItemFromCart, addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0) 

  function handleAddItemToCart() {
    if(quantity === 0) {
      return console.log('Adicione no minimo uma unidade')
    }

    addItemToCart({ coffee, quantity })
    setQuantity(0)
  }

  // function handleSubtractItemFromCart(coffeeId: string) {
  //   subtractItemFromCart(coffeeId)
  // }

  function handleRemoveItemFromCart(itemId: string) {
    removeItemFromCart(itemId)
  }

  function handleIncrementItem() {
    setQuantity(state => state + 1)
  }

  function handleDecrementItem() {
    if(quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  return (
    <div>
      { isListOnCart ?
        <div >
          <SelectedCoffeeList key={coffee.id}>
            <img src={coffee?.image} alt="" />
            <SelectedCoffee>
              <Info>
                <span>
                  {coffee.name}
                </span>
                <p>
                  {`R$ ${coffee.price},00`}
                </p>
              </Info>

              <Buttons>
                <Counter  
                  counterInCartList={true} 
                  quantity={quantity} 
                  handleIncrementItem={handleIncrementItem}
                  handleDecrementItem={handleDecrementItem}
                />
                <Remove type="button" onClick={() => handleRemoveItemFromCart(coffee.id)}>
                  <Trash size={16} />
                  REMOVER
                </Remove>
              </Buttons>
            </SelectedCoffee>
          </SelectedCoffeeList>

          <Separator />
        </div>
      :
        <CoffeeCard>
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
                {coffee.price.toFixed(2)}
              </span>
            </Price>

            <Buy>
              <Counter 
                counterInCartList={false}
                quantity={quantity} 
                handleIncrementItem={handleIncrementItem}
                handleDecrementItem={handleDecrementItem}  
              />
              <button type='button' onClick={() => handleAddItemToCart()}>
                <ShoppingCart size={22} weight='fill' />
              </button>
            </Buy>
          </BuyContainer>
        </CoffeeCard>
      }
    </div>
  )
}       