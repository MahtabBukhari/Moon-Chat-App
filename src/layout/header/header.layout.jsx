import React from 'react'
import LoginButton from '../../components/button/button.component'
import './header.style.css'

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>Moon Chat</div>
    <div>
          <LoginButton/>
    </div>
    
    </div>
  )
}

export default Header