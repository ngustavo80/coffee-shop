import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./styles";

interface CounterProps {
  counterInCartList: boolean;
  quantity: number;
  handleIncrementItem: () => void;
  handleDecrementItem: () => void;
}

export function Counter({ 
  handleIncrementItem, 
  handleDecrementItem, 
  quantity }: CounterProps) {
    
  return (
    <CounterContainer>
      <button type='button' onClick={handleDecrementItem}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span> 
      <button type="button" onClick={handleIncrementItem}> 
        <Plus size={14} />
      </button>
    </ CounterContainer>
  )
}