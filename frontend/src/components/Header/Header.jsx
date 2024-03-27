import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const navigate = useNavigate();
    return (
    <div id='containerHeader' className='flex items-center'>
        <div id='logo'>
        <button onClick={navigate('/')} className='w-56 h-56'>
          <img src="\image\logo.png" alt="logo" />
        </button>
        </div>
        <div id='navbar' className=''>
         <button onClick={navigate('/')}>DigiDex</button>
         <button onClick={navigate('/')}>API</button>
         <button onClick={navigate('/')}>About Us</button>
        </div>
    </div>
  )
}

export default Header