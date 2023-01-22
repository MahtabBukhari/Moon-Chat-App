import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./layout/header/header.layout";
import ChatBox from "./pages/chat-box/chat-box.pages";
import Login from "./pages/login/login.page";
import SplashScreen from "./pages/splash-screen/splash-screen.page";

const App = () => {
  const navigate = useNavigate()
  const [isSplash, setIsSplash] = useState(true);
  useEffect(() => {
    //Idle timer

    let timerId;

    const resetTimer = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        setIsSplash(false);
       navigate('/')
      }, 2000);
    };

    setTimeout(() => {
      resetTimer();
    }, 1000);
  }, []);

  return (
    <>
      {isSplash ? (
        <SplashScreen />
      ) : (
        <>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/chat-room" element={<ChatBox />} />
        </Routes>
        
        </>
      )}
    </>
  );
};

export default App;
