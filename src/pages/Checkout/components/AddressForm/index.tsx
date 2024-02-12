import { AddressFormWrapper } from './style'


export function AddressForm() {
  return (
    
    <AddressFormWrapper>
      <input type="text" placeholder="CEP" name="zipCode" />
      <input type="text" placeholder="Rua" name="Street" />
      <div>
        <input type="text" placeholder="Número" name="number" />
        <input type="text" placeholder="Complemento" name="complement" />
      </div>
      <div>
        <input type="text" placeholder="Bairro" name="neighborhood" />
        <input type="text" placeholder="Cidade" name="city" />
        <input type="text" placeholder="UF" name="state" />
      </div>
    </AddressFormWrapper>
  )
} 