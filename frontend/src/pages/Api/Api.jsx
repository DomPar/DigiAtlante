// import React, { useState, useEffect } from 'react'
// import { getAllDigi } from "../../services/digiService"

// const Api = () => {

//   return (
//     <div id="dexDisplay" className="overflow-y-auto h-full w-[70vw] m-auto" >
//       <h1 className='text-center py-3 text-2xl mt-16 text-with-border'>Endpoints</h1>
//       <div className='flex flex-row flex-wrap w-full h-4/6 justify-evenly '>
//         <div className='h-[150px] w-[500px] p-4 bg-[#ffccdd] bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
//             <h3 className='text-center text-with-border'>Get all digimons:</h3>
//             <p>api/digimon</p>
//         </div>
//         <div className='h-[150px] w-[500px] p-4 bg-[#ffccdd] bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
//             <h3 className='text-center text-with-border'>Get one digimon by Id:</h3>
//             <p>api/digimon/('Id')</p>
//             <p>example: api/digimon/2</p>
//         </div>
//         <div className='h-[150px] w-[500px] p-4 bg-[#ffccdd] bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
//           <h3 className='text-center text-with-border'>Get one digimon by name:</h3>
//           <p>api/digimon/('name')</p>
//           <p>example: api/digimon/Agumon</p>
//         </div>
//         <div className='h-[150px] w-[500px] p-4 bg-[#ffccdd] bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
//           <h3 className='text-center text-with-border'>Get digimon by level:</h3>
//           <p>api/digimon/level/('level')</p>
//           <p>example: api/digimon/level/champion</p>
//         </div>
//         <div className='h-[150px] w-[500px] p-4 bg-[#ffccdd] bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
//           <h3 className='text-center text-with-border'>Get digimon by attribute:</h3>
//           <p>api/digimon/attribute/('attribute')</p>
//           <p>example: api/digimon/attribute/data</p>
//           <p>The type of attributes are: data, virus, vaccine</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Api

import React from 'react'

const Api = () => {

  return (
    <div id="dexDisplay" className="overflow-y-auto h-full w-[70vw] m-auto" >
      <h1 className='text-center py-3 text-2xl mt-16 text-with-border'>Endpoints</h1>
      <div className='flex sm:flex-col flex-row flex-wrap w-full h-4/6 justify-evenly gap-4'>
        <div className='h-[150px] sm:w-full w-[500px] p-4  bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
            <h3 className='text-center text-with-border'>Get all digimons:</h3>
            <p>api/digimon</p>
        </div>
        <div className='h-[150px] sm:w-full w-[500px] p-4  bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
            <h3 className='text-center text-with-border'>Get one digimon by Id:</h3>
            <p>api/digimon/('Id')</p>
            <p>example: api/digimon/2</p>
        </div>
        <div className='h-[150px] sm:w-full w-[500px] p-4  bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
          <h3 className='text-center text-with-border'>Get one digimon by name:</h3>
          <p>api/digimon/('name')</p>
          <p>example: api/digimon/Agumon</p>
        </div>
        <div className='h-[150px] sm:w-full w-[500px] p-4  bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
          <h3 className='text-center text-with-border'>Get digimon by level:</h3>
          <p>api/digimon/level/('level')</p>
          <p>example: api/digimon/level/champion</p>
        </div>
        <div className='h-[150px] sm:w-full w-[500px] p-4 bg-black bg-opacity-70 py-6 shadow-2xl rounded-xl'>
          <h3 className='text-center text-with-border'>Get digimon by attribute:</h3>
          <p>api/digimon/attribute/('attribute')</p>
          <p>example: api/digimon/attribute/data</p>
          <p>The type of attributes are: data, virus, vaccine</p>
        </div>
      </div>
    </div>
  )
}

export default Api
