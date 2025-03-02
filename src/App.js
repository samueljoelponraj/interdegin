import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Signup from  "./components/Signup";
import DesignDisplay from "./components/DesignDisplay";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/designdisplay" /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/designdisplay"
          element={
            isLoggedIn ? <DesignDisplay /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
