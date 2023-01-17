import React from "react";
import LoginButton from "../../components/button/button.component";
import Header from "../../layout/header/header.layout";
import './login.style.css'

const Login = () => {
  return (
    <>
    <Header/>
    <div className="login-page">
      <div className="login-text">Welcome to Moon Chat Group<br/> Let's start</div>
      <div><LoginButton/></div>
    </div>
   
    </>
  );
};

export default Login;
