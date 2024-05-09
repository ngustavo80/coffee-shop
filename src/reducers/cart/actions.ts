import { CoffeeType } from "../../coffees";

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  SUBTRACT_ITEM_FROM_CART = 'SUBTRACT_ITEM_FROM_CART',
  REMOVE_ALL_ITEMS_FROM_CART = 'REMOVE_ALL_ITEMS_FROM_CART',
  DECREMENT_ITEM_QUANTITY_FROM_CART = 'DECREMENT_ITEM_QUANTITY_FROM_CART',
  INCREMENT_ITEM_QUANTITY_FROM_CART = 'INCREMENT_ITEM_QUANTITY_FROM_CART',
}

export interface ItemProps {
  coffee: CoffeeType;
  quantity: number;
}

export function addItemToCartAction(item: ItemProps) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { item }
  }
}

export function removeItemFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { coffeeId }
  } 
}

export function removeAllItemFromCartAction() {
  return {
    type: ActionTypes.REMOVE_ALL_ITEMS_FROM_CART,
  }
}

export function decrementItemQuantityFromCart(coffeeId: string) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY_FROM_CART,
    payload: { coffeeId }
  }
}

export function incrementItemQuantityFromCart(coffeeId: string) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY_FROM_CART,
    payload: { coffeeId }
  }
}