import { Minus, Plus } from '@phosphor-icons/react'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

import { CoffeeCounterContainer } from './styles'

export function CoffeeCounter() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
    })

  const increment = getIncrementButtonProps()
  const decrement = getDecrementButtonProps()
  const input = getInputProps() 

  return (
    <CoffeeCounterContainer>
      <HStack>
        <Button {...decrement}>
          <Minus size={14} />  
        </Button>
        <Input {...input} width={20} />
        <Button {...increment}>
          <Plus size={14} />
        </Button>
      </HStack>
    </ CoffeeCounterContainer>
  )
}