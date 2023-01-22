import React from 'react'
import Avatar from '../../components/avatar/avatar.component'

const Footer = () => {
  return (
    <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
   <Avatar imageUrl={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"}/>
    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1"
      placeholder="Type message"/>
    <a className="ms-3" href="#!"><i className="fas fa-paper-plane"/></a>
  </div>
  )
}

export default Footer