import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Ticket from './pages/Ticket';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem('user-details') !== '') {
      setUser(JSON.parse(localStorage.getItem('user-details')));
    }
  }, []);

  return (
    <Router>
      {user !== null ? (
        <Routes>
              <Route extact path="/" element={<Home />} />
              <Route path="/ticket/:id" element={<Ticket />} />
              <Route path="/profile" element={<Profile />} />
        </Routes>
      ):(
        <Routes>
              <Route extact path="/" element={<Navigate to={'/login'} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Router>
  )
}

export default App;