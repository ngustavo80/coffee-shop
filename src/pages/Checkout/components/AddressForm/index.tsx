import { useFormContext } from 'react-hook-form'
import { AddressFormWrapper } from './style'


export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormWrapper>
      <input id="zipCode" type="text" placeholder="CEP" {...register('zipCode')} />
      <input id="Street" type="text" placeholder="Rua" {...register('street')} />
      <div>
        <input id="number" type="text" placeholder="Número" {...register('number')} />
        <input id="complement" type="text" placeholder="Complemento" {...register('complement')} />
      </div>
      <div>
        <input id="neighborhood" type="text" placeholder="Bairro" {...register('neighborhood')} />
        <input id="city" type="text" placeholder="Cidade" {...register('city')} />
        <input id="state" type="text" placeholder="UF" {...register('state')} />
      </div>
    </AddressFormWrapper>
  )
} 