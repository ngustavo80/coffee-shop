import { useState, useEffect } from 'react'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import coffeeDeliveryLogo from '../../assets/coffeeLogo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

interface GeoLocationResultType {
  name: string;
  state: "granted" | "denied" | "prompt";
}

interface PositionProps {
  coords: {
    latitude: number;
    longitude: number;
  }
}


export function Header() {
  const [stateCode, setStateCode] = useState(); 
  const [town, setTown] = useState();
  
  const APIkey = 'd346596fb06e4d1f94150099d533d0ed'
  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0, };
  
  function getLocationInfo(latitude: number, longitude: number) { 
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`
    
    fetch(url) 
    .then((response) => response.json()) 
      .then((data) => { 
        console.log(data)
        if (data.status.code === 200) { 
          setStateCode(data.results[0].components.state_code)
          setTown(data.results[0].components.town)
        } else { 
          alert("Geolocation request failed.") 
        }
      })
      .catch((error) => alert(error)); 
    }

  function success(position: PositionProps) { 
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    
    getLocationInfo(latitude, longitude)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function errors(err: any) { console.warn(`ERROR(${err.code}): ${err.message}`); }

  useEffect(() => { 
    if (navigator.geolocation) { 
      navigator.permissions.query({ name: "geolocation" }) 
      .then((result: GeoLocationResultType) => { 
        console.log(result); 
        if (result.state === 'granted') {
          return navigator.geolocation.getCurrentPosition(success, errors, options)
        } else if (result.state === 'prompt') {
          return navigator.geolocation.getCurrentPosition(success, errors, options)
        } else if (result.state === 'denied') {
          console.log('Geolocation not available')
      }
    }) 
    } else { 
      console.log("Geolocation is not supported by this browser.")
    } 
  });

  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <nav>
        <div className='location'>
          <MapPin size={22} weight='fill' />
          <span>{town}, {stateCode}</span>
        </div>
        <NavLink to='/checkout'>
          <div className='cart'>
            <ShoppingCart size={22} weight='fill' />
          </div>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}