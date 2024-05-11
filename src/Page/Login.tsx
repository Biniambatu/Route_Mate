import { Button } from '@chakra-ui/react'
import React from 'react'
import { Navigation, useNavigate } from 'react-router-dom' 
const Login = () => {
  const navigate = useNavigate()
  const handle = () =>{
    console.log('submited');
    navigate('/')
  }
  return (
    <div>
      <Button onClick={handle}>Back to home</Button>
    </div>
  )
}

export default Login