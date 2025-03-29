import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className='flex items-center justify-between bg-gray-800 text-white p-4'>
            <h2 className='text-3xl font-bold'>Portfoile-builder</h2>
         <ul className='flex gap-10 mx-5'>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
         </ul>
       </nav>
    </div>
  )
}

export default Navbar
