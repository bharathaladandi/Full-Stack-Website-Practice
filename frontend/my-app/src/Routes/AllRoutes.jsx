import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Cart } from '../Components/Cart'
import { Homepage } from '../Components/Homepage'
import { Login } from '../Components/Login'
import { Products } from '../Components/Products'
import { Signup } from '../Components/Signup'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/product' element={<Products />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
        </Routes>
    </div>
  )
}
