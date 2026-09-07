import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Home/Index'
import Login from '../Login/Index'
import Cart from '../Cart/Index'
import Register from '../Account_Register/Index'
function Index() {
  return (
    <div>
    <NavLink to='/'>Home</NavLink> ||||
    <NavLink to='/cart'>Cart</NavLink>||||
    <NavLink to='/login'>Login</NavLink>


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    </div>
  )
}

export default Index