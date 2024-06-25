import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
     <div className='Navbar'>
      <Link className='Comps' to="/Home">Home</Link>
      <Link className='Comps' to="/About">About</Link>
      <Link className='Comps' to="Explore">Explore</Link>
      <Link className='Comps' to="Cart">Cart</Link>
     </div>
    </>
  )
}

export default Navbar
