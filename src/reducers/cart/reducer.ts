import { produce } from "immer"
import { CoffeeType } from "../../coffees"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CartReducer(state: CoffeeType[], action: any) {
  switch(action.type) {
    
    case 'ADD_ITEM_TO_CART': {
      const itemAlreadyInCartIndex = state.findIndex(item => item.id === action.payload.item.id)
      if(itemAlreadyInCartIndex !== -1) {
        return produce(state, (draft) =>{
          draft[itemAlreadyInCartIndex].quantity++
        })
      } else {
        return produce(state, (draft)=> {
          draft.push(action.payload.item)
        })
      }
    }

    case 'SUBTRACT_ITEM_FROM_CART': {
      const itemInCartIndex = state.findIndex(item => item.id === action.payload.coffeeId)

      return produce(state, (draft) => {
        if(draft[itemInCartIndex].quantity === 1) {
          draft.splice(itemInCartIndex, 1)
        } else {
          draft[itemInCartIndex].quantity--
        }
      })
    }

    case 'REMOVE_ITEM_FROM_CART': {
      const itemInCartIndex = state.findIndex(item => item.id === action.payload.coffeeId)
      return produce(state, (draft) => {
        draft.splice(itemInCartIndex, 1)
      })
    }

    case 'REMOVE_ALL_ITEMS_FROM_CART': {
      return produce(state, (draft) => {
        draft.splice(0, draft.length)
      })
    }

    default: {
      return state
    }
  }
}