import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';
import Ticket from './pages/Ticket';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const { user } = useSelector((state) => state.auth);

  useEffect(() =>{
    if(user !== null){
      setIsLoggedIn(true);
    }
  },[user]);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/ticket/:id" element={<Ticket />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={'/login'} />} /> 
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App;