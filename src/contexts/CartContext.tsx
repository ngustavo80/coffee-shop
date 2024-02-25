import { createContext, useEffect, useReducer } from "react"

import { CoffeeType } from "../coffees"
import { produce } from "immer";

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  cart: CoffeeType[];
  addItemToCart: (item: CoffeeType) => void;
  removeItemFromCart: (item: CoffeeType) => void;
  subtractItemFromCart: (item: CoffeeType) => void;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, dispatch] = useReducer((state: CoffeeType[], action: any) => {
    const itemAlreadyInCoffee = state.findIndex(item => item.id === action.payload.item.id)
    switch(action.type) {
      case 'ADD_ITEM_TO_CART': {
        if(itemAlreadyInCoffee !== -1) {
          return produce(state, (draft) =>{
            draft[itemAlreadyInCoffee].quantity++
          })
        } else {
          return produce(state, (draft)=> {
            draft.push(action.payload.item)
          })
        }
      }

      case 'SUBTRACT_ITEM_FROM_CART': {
        return produce(state, (draft) => {
          if(draft[itemAlreadyInCoffee].quantity === 1) {
            draft.splice(itemAlreadyInCoffee, 1)
          } else {
            draft[itemAlreadyInCoffee].quantity--
          }
        })
      }

      case 'REMOVE_ITEM_FROM_CART': {
        return produce(state, (draft) => {
          draft.splice(itemAlreadyInCoffee, 1)
        })
      }

      default: {
        return state
      }
    }
  }, [], (initialState) => { return initialState })

  useEffect(() => {console.log(cart)}, [cart])

  function addItemToCart(item: CoffeeType) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: { item }
    })
  }

  function removeItemFromCart(item: CoffeeType) {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: { item }
    })
  }

  function subtractItemFromCart(item: CoffeeType) {
    dispatch({
      type: 'SUBTRACT_ITEM_FROM_CART',
      payload: { item }
    })
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItemToCart,
      removeItemFromCart,
      subtractItemFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}