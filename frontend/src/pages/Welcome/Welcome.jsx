import React, { useState, useEffect } from 'react';
import './Welcome.css'; 
import { useNavigate } from 'react-router-dom';
import { getAllDigiListedById } from "../../services/digiService"

const Welcome = () => {
  const navigate = useNavigate();
  const[digis, setDigis] = useState([])

  const handleClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
      
    const getDigisListedById = async () => {
       const {result} = await getAllDigiListedById()
       setDigis(result)
    }
    getDigisListedById()
}, [])
  return (
    <main id='containerWelcome' className='flex flex-col m-auto bg-black bg-opacity-50 w-[80%] h-[90%]'>
        <img src="\image\titulo.png" alt="titulo"  className='h-[20%]'/>
        <div className='h-[80%] grid grid-cols-2 grid-rows-2'>
          <div className='row-start-1 row-end-3'>
            <img src="\image\img3.jpg" alt="" className='object-contain m-auto w-[90%] h-[50%] row-start-1 row-end-2'/>
            <p className='w-[90%] m-auto'>A digimon api with its own digidex</p> 
          </div>
          <div className='flex flex-col justify-center items-center gap-6 row-start-1 row-end-2'>
            <button onClick={()=> handleClick('/digidex')} className='button-49'>Digidex</button>
            <button onClick={()=>handleClick('/api')} className='button-49'>Api</button>
          </div>
          <div className='flex gap-6 row-start-2 row-end-3 flex items-center justify-center'>
            <div className='w-[90%] h-[70%] bg-gray-100 overflow-y-auto'>
              {digis.slice().reverse().map((digi, index) => {
              return <p className='texto-normal' key={index}>{digi.name} has been added to the digidex.</p>;
              })}
            </div>
          </div>
        </div>
    </main> 
  );
};

export default Welcome;
