import { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart, XCircle } from '@phosphor-icons/react'

import coffeeDeliveryLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer, ItemsInCart, LocationCardDenied, LocationCardGranted } from './styles'
import { CartContext } from '../../contexts/CartContext'

interface LocationProps {
    stateCode: string | undefined;
    city: string | undefined;
}

interface PositionProps {
  coords: {
    latitude: number;
    longitude: number;
  }
}

export function Header() {
  const { cart } = useContext(CartContext)

  const [location, setLocation] = useState<LocationProps>(() => {
    const locationOnStorage = localStorage.getItem('@coffee-delivery:location-1.0.0')

    if(locationOnStorage) {
      return JSON.parse(locationOnStorage)
    }
    
    return {}
  })
  
  useEffect(() => {
    const APIkey = import.meta.env.VITE_API_KEY

    function getLocationInfo (latitude: number, longitude: number) { 
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`
      
      fetch(url) 
      .then((response) => response.json()) 
      .then((data) => { 
        if (data.status.code === 200) { 
          setLocation({
            stateCode: data.results[0].components.state_code,
            city: data.results[0].components.city
          })
        } else { 
          alert("Geolocation request failed.")
        }
      })
      .catch((error) => alert(error)); 
    }
    
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    
    function onSuccess (position: PositionProps) { 
      const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      
      getLocationInfo(coordinates.latitude, coordinates.longitude)
    }
    
    function onError() { alert("Não foi possível acessar a localização"); }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
    } else {
      alert('Geolocalização não disponível nesse navegador')
    }
  }, [])

  useEffect(() => {
    const LocalStorageLocation = JSON.stringify(location)
    
    localStorage.setItem('@coffee-delivery:location-1.0.0', LocalStorageLocation)
  }, [location])

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <nav>
          {
            location === undefined ? 
              <LocationCardDenied>
                <XCircle size={22} weight='fill' />
                <span>Localização não autorizada</span>
              </LocationCardDenied>
              : 
              <LocationCardGranted>
                <MapPin size={22} weight='fill' />
                <span>{location.city}, {location.stateCode}</span>
              </LocationCardGranted>
          }
          <NavLink to='/checkout'>
            <div className='cart'>
              {cart.length === 0 ? <></> : <ItemsInCart>{cart.length}</ItemsInCart>}
              <ShoppingCart size={22} weight='fill' />
            </div>
          </NavLink>
      </nav>
    </HeaderContainer>
  )
}