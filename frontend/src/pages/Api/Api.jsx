import React, { useState, useEffect } from 'react'
import { getAllDigi } from "../../services/digiService"

const Api = () => {

  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>
      <div className='size-[300px] bg-white p-4'>
        <h2>Endpoints:</h2>
        <div>
          <h3>Get all digimons:</h3>
          <p>api/digimon</p>
        </div>
        <div>
          <h3>Get one digimon by Id:</h3>
          <p>api/digimon/('Id') ex: api/digimon/2</p>
        </div>
        <div>
          <h3>Get one digimon by name:</h3>
          <p>api/digimon/('name') ex: api/digimon/Agumon</p>
        </div>
      </div>
    </div>
  )
}

export default Api