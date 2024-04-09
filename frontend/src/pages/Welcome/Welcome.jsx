import React from 'react';
import './Welcome.css'; 
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <main id='containerWelcome' className='flex flex-col items-end'>
        <div className=''>
        <div >
          <img src="\image\titulo.png" alt="titulo"  className='size-6/12'/>
        </div>
        <div className=''>
          <p >A digimon api with its own digidex</p> 
        </div>
        <div className='flex gap-6 pt-4'>
          <button onClick={()=> handleClick('/digidex')}>Digidex</button>
          <button onClick={()=>handleClick('/api')}>Api</button>
        </div>
        </div>
    </main> 
  );
};

export default Welcome;
