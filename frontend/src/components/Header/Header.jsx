import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const navigate = useNavigate();
    return (
    <div id='containerHeader'>
        <div id='logo'>
        <p>loguito</p>
        </div>
        <div id='navbar'>
         <button onClick={navigate('/')}>Texto1</button>
         <button onClick={navigate('/')}>Texto2</button>
         <button onClick={navigate('/')}>Texto3</button>
        </div>
    </div>
  )
}

export default Header