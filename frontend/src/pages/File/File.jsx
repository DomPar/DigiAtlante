import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOneDigi } from '../../services/digiService';


const File = () => {
  const [digi, setDigi] = useState({});
  const {digiId} = useParams();

  useEffect(() => {
    const getDigi = async () => {
      const {result} = await getOneDigi(digiId)
      setDigi(result)
    }
    getDigi();
  }, [])


  return (
    <div id='containerFile' className='w-full h-full bg-orange-100 flex'>
      <div id="digiImageContainer" className='bg-green-100 w-full h-full flex justify-center items-center'>
        <div id="digiImageDevice" className='w-4/5 h-4/5 bg-[url("https://lozshop.com/wp-content/uploads/2021/07/SC-5009-Digimon-Digivice.png")] bg-no-repeat	bg-center flex justify-center items-center'>
          <div id="digiImage" className='flex justify-center items-center'>
            <img src={digi.image} alt="" className='w-88 h-88'/>
          </div>
        </div>
      </div>

      <div id="digiInfo" className='bg-cyan-100 w-full h-full p-10 flex flex-col gap-2'>
        <div id="digiNombre" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Name: {digi.name}</div>
        <div id="digiLevel" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Level: {digi.level}</div>
        <div id="digiType" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Type: {digi.type}</div>
        <div id="digiAtributte" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Attribute: {digi.atributte}</div>
        <div id="digiAttack" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Attack: {digi.attack}</div>
        <div id="digiDescription" className='h-32 w-full pl-2 bg-sky-500 flex items-center'>{digi.description}
        Description description
        </div>
        <div id="preEvoDigi" className='h-28 w-full border border-sky-500'></div>
        <div id="evoDigi" className='h-28 w-full border border-sky-500'></div>
        <div id="variantDigi" className='h-28 w-full border border-sky-500'></div>
      </div>      
    </div>
  )
}
export default File