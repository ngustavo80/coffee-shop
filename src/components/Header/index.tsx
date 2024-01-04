import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart, XCircle } from '@phosphor-icons/react'

import coffeeDeliveryLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer, LocationCardDenied, LocationCardGranted } from './styles'

interface PositionProps {
  coords: {
    latitude: number;
    longitude: number;
  }
}

interface LocationProps {
    stateCode: string | undefined;
    city: string | undefined;
}


export function Header() {
  const [location, setLocation] = useState<LocationProps>()
  const APIkey = 'd346596fb06e4d1f94150099d533d0ed'
  
  function getLocationInfo(latitude: number, longitude: number) { 
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`
    
    fetch(url) 
    .then((response) => response.json()) 
      .then((data) => { 
        console.log(data)
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

  useEffect(() => { 
    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }

    function onSuccess(position: PositionProps) { 
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      
      getLocationInfo(latitude, longitude)
    }

    function onError() { alert("Não foi possível acessar a localização"); }

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
    } else {
      alert('Geolocalização não disponível nesse navegador')
    }
  }, [])

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <nav>
          {location === undefined ? 
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
            <ShoppingCart size={22} weight='fill' />
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}