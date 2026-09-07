import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Home/Index";
import Login from "../Login/Index";
import Cart from "../Cart/Index";
import Register from "../CreateLoginAccount/Index";
import './Navbar.css'
function Index() {
  return (
    <div>
      <div className="navbar">
        <h3 className="logo">DS mart</h3>
        <div className="navLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Index;
