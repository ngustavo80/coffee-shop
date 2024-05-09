import { useContext, useState } from "react"
import { ShoppingCart } from "@phosphor-icons/react"

import { CartContext } from "../../contexts/CartContext"
import { CoffeeType } from "../../coffees"
import { Counter } from "../Counter"
import { 
  CoffeeCard, 
  Buy, 
  BuyContainer, 
  Price, 
  Tags,
  AddToCartButton 
} from "./styles"

interface CoffeeGridProps {
  coffee: CoffeeType
}

export function CoffeeGrid({ coffee }: CoffeeGridProps) {
  const { addItemToCart, cart } = useContext(CartContext)

  const item = cart.find(item => item.coffee.id === coffee.id)
  const [quantity, setQuantity] = useState(() => {
    if(item?.quantity && item?.quantity > 0) {
      return item.quantity
    } else {
      return 0
    }
  }) 

  function handleAddItemToCart() {
    if(quantity === 0) {
      return console.log('Adicione no minimo uma unidade')
    }

    addItemToCart({ coffee, quantity })
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
    <CoffeeCard>
      <img src={coffee?.image} alt={coffee.description} />

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
            quantity={quantity} 
            handleIncrementItem={handleIncrementItem}
            handleDecrementItem={handleDecrementItem}  
          />
          <AddToCartButton type='button' onClick={() => handleAddItemToCart()}>
            <ShoppingCart size={22} weight='fill' />
          </AddToCartButton>
        </Buy>
      </BuyContainer>
    </CoffeeCard>
  )
}