import React from 'react'
import { Link } from 'react-router-dom'



const LoginButton = () => {
  return (
    <Link to='/chat-room' type="button" className="btn btn-primary btn-sm" data-mdb-ripple-color="dark">
    
    Let's Chat</Link>
  )
}

export default LoginButton
