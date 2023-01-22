import React, { useState } from "react";
import Avatar from "../avatar/avatar.component";

const Message = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
   
    <div className={`d-flex flex-row justify-content-${isAdmin?'start':'end'}`}>
    <Avatar imageUrl={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"}/>
     <div>
       <p className={`small p-2 ms-3 mb-1 rounded-3 ${isAdmin?'':'text-white'} bg-${isAdmin?'gray':'primary'}`}>Hi, how are you?</p>
     
       <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
     </div>
   </div>
   
  );
};

export default Message;
