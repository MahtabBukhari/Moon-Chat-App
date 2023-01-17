import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
