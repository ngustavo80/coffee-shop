import { createContext, useReducer, useState, useEffect } from "react"

import { CoffeeType } from "../coffees"
import { CartReducer } from "../reducers/cart/reducer";
import { 
  addItemToCartAction, 
  removeAllItemFromCartAction, 
  removeItemFromCartAction, 
  decrementItemQuantityFromCart,
  incrementItemQuantityFromCart
} from "../reducers/cart/actions";

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  cart: ItemProps[];
  address: AddressType;
  subTotal: number;
  total: number;
  addItemToCart: (item: ItemProps) => void;
  removeItemFromCart: (coffeeId: string) => void;
  decrementItemFromCart: (coffeeId: string) => void;
  incrementItemFromCart: (coffeeId: string) => void;
  RegisterAddress: (data: AddressType) => void;
}

interface AddressType {
  city: string;
  complement?: string;
  neighborhood: string;
  number: string;
  paymentMethod: string;
  state: string;  
  street: string;
  zipCode: string;
}

interface ItemProps {
  coffee: CoffeeType;
  quantity: number;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [address, setAddress] = useState({} as AddressType)
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [cart, dispatch] = useReducer(CartReducer, [], (initialState) => { return initialState })

  function addItemToCart(item: ItemProps) {
    dispatch(addItemToCartAction(item))
  }

  function decrementItemFromCart(coffeeId: string) {
    dispatch(decrementItemQuantityFromCart(coffeeId))
  }

  function incrementItemFromCart(coffeeId: string) {
    dispatch(incrementItemQuantityFromCart(coffeeId))
  }

  function removeItemFromCart(coffeeId: string) {
    dispatch(removeItemFromCartAction(coffeeId))
  }

  function RegisterAddress(data: AddressType) {
    setAddress(data)
    dispatch(removeAllItemFromCartAction())
  }

  useEffect(() => {
    const subTotalPrice = cart.reduce((total, item) => {
      if(item.quantity > 0) {
        return total + (item.quantity * item.coffee.price)
      }

      return total + item.coffee.price
    }, 0)

    setSubTotal(subTotalPrice)
    setTotal(subTotal + 5)
  }, [cart, subTotal])

  return (
    <CartContext.Provider value={{
      cart,
      addItemToCart,
      removeItemFromCart,
      decrementItemFromCart,
      incrementItemFromCart,
      RegisterAddress,
      address,
      subTotal,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}