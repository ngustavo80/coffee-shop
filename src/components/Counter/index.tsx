import { Minus, Plus } from '@phosphor-icons/react'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

import { CounterContainer } from './styles'

export function Counter() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
    })

  const increment = getIncrementButtonProps()
  const decrement = getDecrementButtonProps()
  const input = getInputProps() 

  return (
    <CounterContainer>
      <HStack>
        <Button {...decrement}>
          <Minus size={14} />  
        </Button>
        <Input {...input} width={20} />
        <Button {...increment}>
          <Plus size={14} />
        </Button>
      </HStack>
    </ CounterContainer>
  )
}