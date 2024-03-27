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
        <div id="digiImageDevice" className='w-4/5 h-4/5 bg-[url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58c8e6d1-3f1f-4efc-9523-143fe9f1947e/de2dpfp-4f597a34-87f9-49cf-b13d-317a46a3d0eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4YzhlNmQxLTNmMWYtNGVmYy05NTIzLTE0M2ZlOWYxOTQ3ZVwvZGUyZHBmcC00ZjU5N2EzNC04N2Y5LTQ5Y2YtYjEzZC0zMTdhNDZhM2QwZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qmzGlnUdl3xX04AcZ-gTlzlRC0viJkD4_XiyVt-9t4w")] bg-no-repeat bg-contain bg-center flex justify-center items-center'>
          <div id="digiImage" className='flex justify-center items-center'>
            <img src={digi.image} alt="" className='w-4/5 h-4/5'/>
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