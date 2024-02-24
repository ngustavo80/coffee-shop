import { useContext, useState } from "react";
import { CoffeeType } from "../../coffees";

import { Minus, Plus } from "@phosphor-icons/react";
import { CartContext } from "../../contexts/CartContext";

import { CounterContainer } from "./styles";

interface CounterProps {
  coffee: CoffeeType;
  counterInCartList: boolean;
}

export function Counter({ coffee, counterInCartList }: CounterProps) {
  const { addItemToCart} = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  function handleAddItemToCart(coffee: CoffeeType) {
    addItemToCart(coffee)
    setQuantity(state => state + 1)
  }

  return (
    <CounterContainer>
      <button type='button' onClick={() => 'EBAAAA'}>
        <Minus size={14} />
      </button>  
      {counterInCartList ? <span>{coffee.quantity}</span> : <span>{quantity}</span>}
      <button type="button" onClick={() => handleAddItemToCart(coffee)}> 
        <Plus size={14} />
      </button>
    </ CounterContainer>
  )
}