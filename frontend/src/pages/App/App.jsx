import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function App() {
  return (
    <>
      <div className='relative w-full h-screen flex justify-center items-center overflow-hidden'>
        <video autoPlay loop muted className='absolute inset-0 min-w-full min-h-full object-cover'>
          <source src='/animation/abandoned-Train.mp4' type='video/mp4' />
        </video>
        <div id='layer' className='absolute inset-0 bg-[#1c1c1d] opacity-30 mix-blend-overlay'></div>
        <div className='absolute h-full w-full'>
          <div id="header" className='h-[5vh] flex justify-center'>
            <Header/>
          </div>
          <div id="containerMain" className='h-[95vh] flex justify-center'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
