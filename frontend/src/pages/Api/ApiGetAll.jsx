import React, { useState, useEffect } from 'react'
import { getAllDigi } from "../../services/digiService"

const ApiGetAll = () => {

    const[digis, setDigis] = useState([])

    useEffect(() => {
      
     const getDigis = async () => {
        const {result} = await getAllDigi()
        setDigis(result)
     }
    getDigis()
}, [])
    console.log(digis)

  return (
    <div>{JSON.stringify(digis)}</div>
  )
}

export default ApiGetAll