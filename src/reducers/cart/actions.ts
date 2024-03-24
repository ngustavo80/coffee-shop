import { CoffeeType } from "../../coffees";

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  SUBTRACT_ITEM_FROM_CART = 'SUBTRACT_ITEM_FROM_CART',
  REMOVE_ALL_ITEMS_FROM_CART = 'REMOVE_ALL_ITEMS_FROM_CART',
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

export function subtractItemFromCartAction(coffeeId: string) {
  return {
    type: ActionTypes.SUBTRACT_ITEM_FROM_CART,
    payload: { coffeeId }
  }
}