import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{justifyContent:'space-around', display:'flex'}}>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/product"><h3>Product</h3></Link>
        <Link to="/cart"><h3>Cart</h3></Link>
        <Link to="/signup"><h3>Signup</h3></Link>
        <Link to="/login"><h3>Login</h3></Link>
    </div>

  )
}
