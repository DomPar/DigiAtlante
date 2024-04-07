import React from 'react';
import './Welcome.css'; 
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <main id='containerWelcome' className='relative h-full'>
      <div className='flex flex-col items-end'>
        <div className=''>
        <div >
          <img src="\image\titulo.png" alt="titulo"  className='w-[500px] h-[200px]'/>
        </div>
        <div className='flex flex-col items-center'>
          <p >A digimon api with its own digidex</p> 
        </div>
        <div>
          <button onClick={()=> handleClick('/digidex')}>Digidex</button>
          <button onClick={()=>handleClick('/api')}>Api</button>
        </div>
        </div>
      </div>
    </main> 
  );
};

export default Welcome;
