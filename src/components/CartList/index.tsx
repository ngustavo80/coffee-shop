import { Trash } from "@phosphor-icons/react"
import { Counter } from "../Counter"
import { CoffeeType } from "../../coffees"
import { 
  SelectedCoffeeList, 
  Buttons, 
  Info,  
  SelectedCoffee, 
  Separator, 
  Remove} from "./styles"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

interface CartProps {
  coffee: CoffeeType;
}

export function CartList({ coffee }: CartProps) {
  const { 
    cart, 
    incrementItemFromCart, 
    decrementItemFromCart, 
    removeItemFromCart 
  } = useContext(CartContext)

  function handleIncrementItemFromCart(coffeeId: string) {
    incrementItemFromCart(coffeeId)
  }

  function handleDecrementItemFromCart(coffeeId: string) {
    decrementItemFromCart(coffeeId)
  }

  function handleRemoveItemFromCart(itemId: string) {
    removeItemFromCart(itemId)
  }

  const item = cart.find(item => item.coffee.id === coffee.id)

  return (
    <>
      <SelectedCoffeeList key={coffee.id}>
        <img src={coffee?.image} alt="" />
        <SelectedCoffee>
          <Info>
            <span>
              {coffee.name}
            </span>
            <p>
              {coffee.price.toFixed(2)}
            </p>
          </Info>

          <Buttons>
            <Counter 
              quantity={item?.quantity}
              handleIncrementItem={() => handleIncrementItemFromCart(coffee.id)}
              handleDecrementItem={() => handleDecrementItemFromCart(coffee.id)}
            />
            <Remove type="button" onClick={() => handleRemoveItemFromCart(coffee.id)}>
              <Trash size={16} />
              REMOVER
            </Remove>
          </Buttons>
        </SelectedCoffee>
      </SelectedCoffeeList>

      <Separator />
    </>
  )
}