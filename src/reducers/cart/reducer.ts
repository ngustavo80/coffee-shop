import { produce } from "immer"

import { ActionTypes, ItemProps } from "./actions"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CartReducer(state: ItemProps[], action: any) {
  switch(action.type) {
    
    case ActionTypes.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const itemAlreadyInCart = draft.find((item) => item.coffee.id === action.payload.item.coffee.id)

        if(itemAlreadyInCart) {
          itemAlreadyInCart.quantity=+ action.payload.item.quantity
        } else {
          draft.push(action.payload.item)
        }
      })
    }

    case ActionTypes.DECREMENT_ITEM_QUANTITY_FROM_CART: {
      return produce(state, (draft) => {
        const itemInCart = draft.find(item => item.coffee.id === action.payload.coffeeId)
        if (itemInCart?.coffee.id && itemInCart.quantity > 1) {
          itemInCart.quantity -= 1
        }
      })
    }

    case ActionTypes.INCREMENT_ITEM_QUANTITY_FROM_CART: {
      return produce(state, (draft) => {
        const itemInCart = draft.find(item => item.coffee.id === action.payload.coffeeId)
        if (itemInCart?.coffee.id && itemInCart.quantity >= 1) {
          itemInCart.quantity += 1
        }
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        const itemInCartIndex = draft.findIndex(item => item.coffee.id === action.payload.coffeeId)
        
        if(itemInCartIndex > -1) {
          draft[itemInCartIndex].quantity = 0
          draft.splice(itemInCartIndex, 1)
        }
      })
    }

    case ActionTypes.REMOVE_ALL_ITEMS_FROM_CART: {
      return produce(state, (draft) => {
        draft.splice(0, draft.length)
      })
    }

    default: {
      return state
    }
  }
}