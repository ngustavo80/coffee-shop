import { createContext, useEffect, useReducer } from "react"

import { CoffeeType } from "../coffees"
import { produce } from "immer";

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  cart: CoffeeType[];
  addItemToCart: (item: CoffeeType) => void;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}: CartContextProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, dispatch] = useReducer((state: CoffeeType[], action: any) => {
    switch(action.type) {
      case 'ADD_ITEM_FROM_CART': {
        const itemAlreadyInCoffee = state.findIndex(item => item.id === action.payload.item.id)
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
        return state
      }

      default: {
        return state
      }
    }
  }, [], (initialState) => { return initialState })

  useEffect(() => {console.log(cart)}, [cart])

  function addItemToCart(item: CoffeeType) {
    dispatch({
      type: 'ADD_ITEM_FROM_CART',
      payload: { item }
    })
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItemToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}