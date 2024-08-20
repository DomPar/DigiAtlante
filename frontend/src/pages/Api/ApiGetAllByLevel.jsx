import React, { useState, useEffect } from 'react'
import { getAllDigi, getAllDigiByLevel } from "../../services/digiService"
import { useParams } from 'react-router-dom'

const ApiGetAllByLevel = () => {

    const[digis, setDigis] = useState([])
    const digiLevel = useParams();

    useEffect(() => {
      
     const getDigis = async () => {
        const {result} = await getAllDigiByLevel(digiLevel)
        setDigis(result)
     }
    getDigis()
}, [])

  return (
    <div className='texto-normal'>{JSON.stringify(digis)}</div>
  )
}

export default ApiGetAllByLevel