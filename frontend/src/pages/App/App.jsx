import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



function App() {


  return (
    <>
      <div className='relative h-full flex justify-center'>
        <video autoPlay loop muted className='absolute inset-0 w-full h-full object-cover'>
          <source src='/animation/abandoned-Train.mp4' type='video/mp4' />
        </video>
        <div id='layer' className='absolute inset-0 bg-[#1c1c1d] opacity-30 mix-blend-overlay'></div>
        <div className='absolute h-full'>
          <div id="header" className='h-[5vh] '>
            <Header/>
          </div>
          <div id="containerMain" className='h-[95vh]'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
