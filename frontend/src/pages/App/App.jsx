import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



function App() {


  return (
    <>
      <Header/>
      <div className='relative h-[95vh] flex justify-center'>
        <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover'>
          <source src='/animation/abandoned-Train.mp4' type='video/mp4' />
        </video>
        <div id='layer' className='absolute inset-0 bg-[#1c1c1d] opacity-30 mix-blend-overlay'></div>
        <div id="containerMain" className='absolute h-full'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
