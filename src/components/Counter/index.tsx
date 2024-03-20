import { useContext, useState } from "react";
import { CoffeeType } from "../../coffees";

import { Minus, Plus } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";

import { CounterContainer } from "./styles";

interface CounterProps {
  coffee: CoffeeType;
  counterInCartList: boolean;
}

export function Counter({ coffee }: CounterProps) {
  const { addItemToCart, subtractItemFromCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(coffee.quantity)

  function handleAddItemToCart(coffee: CoffeeType) {
    setQuantity(state => state + 1)
    addItemToCart(coffee)
  }

  function handleSubtractItemFromCart(coffeeId: string) {
    setQuantity(state => state - 1)
    subtractItemFromCart(coffeeId)
  }

  return (
    <CounterContainer>
      <button type='button' onClick={() => handleSubtractItemFromCart(coffee.id)}>
        <Minus size={14} />
      </button>  
      {/* {counterInCartList ? <span>{coffee.quantity}</span> : <span>{quantity}</span>} */}
      <span>{quantity}</span>
      <button type="button" onClick={() => handleAddItemToCart(coffee)}> 
        <Plus size={14} />
      </button>
    </ CounterContainer>
  )
}