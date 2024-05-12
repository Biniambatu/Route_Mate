import React from 'react'
import logo from '../assets/google-play-games.png'
import { Link,NavLink } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'
export const Header = () => {
  return (
    <header>
      <HStack justifyContent="space-between"> 
        <Link to='/'>
           <img src={logo} className='logo' />
        </Link>
        <HStack >
          <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/contact">Contact</NavLink>
           <NavLink to="/employee">Employee</NavLink>
           <NavLink to="/login">Login</NavLink>
          </nav>
        </HStack>
      </HStack>
    
     
    </header>
  )
}

