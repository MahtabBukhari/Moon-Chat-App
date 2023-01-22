import React from 'react'
import LoginButton from '../../components/button/button.component'


const Header = () => {
  return (
    <div className="card" id="chat2">
          <div className="card-header d-flex justify-content-between align-items-center p-3">
            <h5 className="mb-0">moon chat</h5>
          <LoginButton/>
          </div>
    
    </div>
  )
}

export default Header