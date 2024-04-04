import React, { useState } from 'react';
import './Welcome.css'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Welcome = () => {
  const [showSide1, setShowSide1] = useState(true)

  const toggleSide = () => {
    setShowSide1(!showSide1) 
  };

  return (
    <div id='containerWelcome' >
      <div className={`side ${showSide1 ? 'show-side1' : 'show-side2'}`}>
        {showSide1 ? (
          <div id='side1'>
            {/* Contenido del lado 1 */}
            <h1 className='welcomeH1'>Welcome To Digital World</h1>
            <button className='leftArrow' onClick={toggleSide}><ArrowBackIosIcon/></button>
            <button className='rightArrow' onClick={toggleSide}><ArrowForwardIosIcon/></button> 
          </div>
        ) : (
          <div id='side2'>
            {/* Contenido del lado 2 */}
            <h1 className='welcomeH1'>Welcome To Digital World</h1>
            <button className='leftArrow' onClick={toggleSide}><ArrowBackIosIcon/></button>
            <button className='rightArrow' onClick={toggleSide}><ArrowForwardIosIcon/></button> 
          </div>
        )}
      </div>
    </div>
  );
};
       

export default Welcome;
