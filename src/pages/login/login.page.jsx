import React from "react";
import LoginButton from "../../components/button/button.component";
import './login.style.css'

const Login = () => {
  return (
    <>
 
    <div className="login-page">
      <div className="login-text">Welcome to Moon Chat Group</div>
      <div><LoginButton/></div>
    </div>
   
    </>
  );
};

export default Login;
