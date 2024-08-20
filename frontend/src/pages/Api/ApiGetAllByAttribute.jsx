import React, { useState, useEffect } from 'react'
import { getAllDigi, getAllDigiByAttribute } from "../../services/digiService"
import { useParams } from 'react-router-dom'

const ApiGetAllByAttribute = () => {

    const[digis, setDigis] = useState([])
    const digiAttribute = useParams();

    useEffect(() => {
      
     const getDigis = async () => {
        const {result} = await getAllDigiByAttribute(digiAttribute)
        setDigis(result)
     }
    getDigis()
}, [])

  return (
    <div className='texto-normal'>{JSON.stringify(digis)}</div>
  )
}

export default ApiGetAllByAttribute 