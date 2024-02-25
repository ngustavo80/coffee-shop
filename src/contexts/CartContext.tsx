import { createContext, useReducer, useState } from "react"

import { CoffeeType } from "../coffees"
import { CartReducer } from "../reducers/cart/reducer";

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  cart: CoffeeType[];
  address: AddressType;
  addItemToCart: (item: CoffeeType) => void;
  removeItemFromCart: (coffeeId: string) => void;
  subtractItemFromCart: (coffeeId: string) => void;
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

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [address, setAddress] = useState({} as AddressType)

  const [cart, dispatch] = useReducer(CartReducer, [], (initialState) => { return initialState })

  function addItemToCart(item: CoffeeType) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: { item }
    })
  }

  function removeItemFromCart(coffeeId: string) {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { coffeeId } })
  }

  function subtractItemFromCart(coffeeId: string) {
    dispatch({ type: 'SUBTRACT_ITEM_FROM_CART', payload: { coffeeId } })
  }

  function RegisterAddress(data: AddressType) {
    setAddress(data)
    dispatch({ type: 'REMOVE_ALL_ITEMS_FROM_CART' })
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItemToCart,
      removeItemFromCart,
      subtractItemFromCart,
      RegisterAddress,
      address
    }}>
      {children}
    </CartContext.Provider>
  )
}