import { produce } from "immer"

import { ActionTypes, ItemProps } from "./actions"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CartReducer(state: ItemProps[], action: any) {
  switch(action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const itemAlreadyInCartIndex = draft.find((item) => item.coffee.id === action.payload.item.coffee.id)

        if(itemAlreadyInCartIndex) {
          itemAlreadyInCartIndex.quantity=+ action.payload.item.quantity
        } else {
          draft.push(action.payload.item)
        }
      })
    }

    case ActionTypes.SUBTRACT_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        const itemInCartIndex = draft.findIndex(item => item.coffee.id === action.payload.coffeeId)
        if(draft[itemInCartIndex].quantity >= 1) {
          draft[itemInCartIndex].quantity=- action.payload.item.quantity
        }
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        const itemInCartIndex = draft.findIndex(item => item.coffee.id === action.payload.item.coffee.id)
        
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



// if(itemAlreadyInCartIndex) {
      //   return produce(state, (draft) =>{
      //     itemAlreadyInCartIndex.quantity=+ action.payload.item.quantity
      //   })
      // } else {
      //   return produce(state, (draft) => {
      //     draft.push(action.payload.item)
      //   })
      // }