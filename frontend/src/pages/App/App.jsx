import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function App() {


  return (
    <>
      <Header/>
      <div id="containerMain">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
