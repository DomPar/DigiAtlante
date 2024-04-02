import React, { useState, useEffect } from 'react'
import { getAllDigi } from "../../services/digiService"

const Api = () => {

  return (
    <div id='containerApi' className=''>
      <h1 className='text-center py-3 text-2xl'>Endpoints</h1>
      <div className='flex flex-row flex-wrap w-full h-full justify-evenly items-center '>
        <div className='size-[300px] p-4 bg-[#ffccdd] border-pink-500 py-6 shadow-2xl rounded-xl'>
            <h3 className='text-center'>Get all digimons:</h3>
            <p>api/digimon</p>
        </div>
        <div className='size-[300px] p-4 bg-[#ffccdd] border-pink-500 py-6 shadow-2xl rounded-xl'>
            <h3 className='text-center'>Get one digimon by Id:</h3>
            <p>api/digimon/('Id')</p>
            <p>example: api/digimon/2</p>
        </div>
        <div className='size-[300px] p-4 bg-[#ffccdd] border-pink-500 py-6 shadow-2xl rounded-xl'>
          <h3 className='text-center'>Get one digimon by name:</h3>
          <p>api/digimon/('name')</p>
          <p>example: api/digimon/Agumon</p>
        </div>
        <div className='size-[300px] p-4 bg-[#ffccdd] border-pink-500 py-6 shadow-2xl rounded-xl'>
          <h3 className='text-center'>Get digimon by level:</h3>
          <p>api/digimon/level/('level')</p>
          <p>example: api/digimon/level/champion</p>
        </div>
        <div className='size-[300px] p-4 bg-[#ffccdd] border-pink-500 py-6 shadow-2xl rounded-xl'>
          <h3 className='text-center'>Get digimon by attribute:</h3>
          <p>api/digimon/attribute/('attribute')</p>
          <p>example: api/digimon/attribute/data</p>
          <p>The type of attributes are: data, virus, vaccine</p>
        </div>
      </div>
    </div>
  )
}

export default Api