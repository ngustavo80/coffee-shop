import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import coffeeDeliveryLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />

      <div>
        <div className='location'>
          <MapPin size={22} weight='fill' />
          <span>Niterói, RJ</span>
        </div>
        <div className='cart'>
          <ShoppingCart size={22} weight='fill' />
        </div>
      </div>
    </HeaderContainer>
  )
}