import { Minus, Plus } from "@phosphor-icons/react";
import { ChangeQuantityButton, CounterContainer } from "./styles";

interface CounterProps {
  quantity?: number;
  handleIncrementItem: () => void;
  handleDecrementItem: () => void;
}

export function Counter({ 
  handleIncrementItem, 
  handleDecrementItem, 
  quantity,
 }: CounterProps) {
  return (
    <CounterContainer>
      <ChangeQuantityButton type='button' onClick={handleDecrementItem}>
        <Minus size={14} />
      </ChangeQuantityButton>
      <span>{quantity}</span>
      <ChangeQuantityButton type="button" onClick={handleIncrementItem}> 
        <Plus size={14} />
      </ChangeQuantityButton>
    </ CounterContainer>
  )
}