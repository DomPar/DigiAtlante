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
    <main id='containerWelcome' className='flex flex-col items-center m-auto bg-black bg-opacity-50 w-[70%] h-[90%] sm:w-full '>
        <div className='w-[90%] h-[90%] flex flex-col items-center'>
          <img src="\image\titulo2.png" alt="titulo" className='h-[20%] w-[70%]'/>
          <div className='h-[80%] grid grid-cols-12 grid-rows-12 sm:overflow-auto sm:flex sm:flex-col'>
            <div className='row-start-2 row-end-12 col-start-2 col-end-6
                            sm:flex sm:flex-col'>
              <img src="\image\img3.jpg" alt="" className='object-contain m-auto w-[90%] h-[50%]'/>
              <p className='w-[90%] m-auto'>DigiAtlante is a small project designed to serve as both a digidex and a Digimon API, which can be utilized by other applications that require it. This project was created as a way to apply and demonstrate the full-stack development skills we’ve acquired.</p> 
            </div>
            <div className='flex justify-center items-center gap-6 row-start-3 row-end-6 col-start-7 col-end-12 sm:col-start-2'>
              <button onClick={()=> handleClick('/digidex')} className='button-49'>Digidex</button>
              <button onClick={()=>handleClick('/api')} className='button-49'>Api</button>
            </div>
            <div className='flex gap-6 row-start-8 row-end-12 col-start-7 col-end-12 flex-col justify-center sm:col-start-2 sm:col-end-12 sm:row-start-auto'>
              <p>Changelog</p>
              <div className='bg-gray-100 max-h-[150px] w-full overflow-y-auto'>
                {digis.slice().reverse().map((digi, index) => {
                return <p className='texto-normal' key={index}>{digi.name} has been added to the digidex.</p>;
                })}
              </div>
            </div>
          </div>
        </div>
    </main> 
  );
};

export default Welcome;
