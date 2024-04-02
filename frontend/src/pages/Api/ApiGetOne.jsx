import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOneDigi } from '../../services/digiService';

const ApiGetOne = () => {
    const [digi, setDigi] = useState({});
    const {digiId} = useParams();

    useEffect(() => {
        const getDigi = async () => {
          const {result} = await getOneDigi(digiId)
          setDigi(result)
        }
        getDigi();
      }, [digiId])
  return (
    <div>{JSON.stringify(digi)}</div>
  )
}

export default ApiGetOne