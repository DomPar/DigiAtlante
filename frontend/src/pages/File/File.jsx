import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getAllPre, getAllEvo, getAllVar, getOneDigi } from '../../services/digiService';
import DigiPreCard from '../../components/DigiPreCard/DigiPreCard';



const File = () => {
  const [digi, setDigi] = useState({});
  const [pre, setPre] = useState([])
  const [evos, setEvos] = useState([])
  const {digiId} = useParams();

  useEffect(() => {
    const getDigi = async () => {
      const {result} = await getOneDigi(digiId)
      setDigi(result)
    }
    getDigi();
  }, [digiId])

  useEffect(() => {
      
    const getPre = async () => {
       const {result} = await getAllPre(digiId)
       console.log(result[0].ChildPre)
       setPre(result[0].ChildPre)
    }
    getPre()
   }, [digiId])

  const showPre = () => {
    const result = pre.map((preevo)=>{
      return <DigiPreCard id={preevo.id} name={preevo.name} image={preevo.image}/>
  })
  return result
  }

  useEffect(() => {
      
    const getEvos = async () => {
       const {result} = await getAllEvo(digiId)
       console.log(result[0].ChildEvo)
       setEvos(result[0].ChildEvo)
    }
    getEvos()
  }, [digiId])
  
  const showEvo = () => {
    const result = evos.map((evo)=>{
      return <DigiPreCard id={evo.id} name={evo.name} image={evo.image}/>
  })
  return result
  }

  return (
    <div id='containerFile' className='w-full h-full flex'>
      <div id="digiImageContainer" className='w-full h-full flex justify-center items-center'>
        <div id="digiImageDevice" className='w-4/5 h-4/5 bg-[url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58c8e6d1-3f1f-4efc-9523-143fe9f1947e/de2dpfp-4f597a34-87f9-49cf-b13d-317a46a3d0eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4YzhlNmQxLTNmMWYtNGVmYy05NTIzLTE0M2ZlOWYxOTQ3ZVwvZGUyZHBmcC00ZjU5N2EzNC04N2Y5LTQ5Y2YtYjEzZC0zMTdhNDZhM2QwZWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qmzGlnUdl3xX04AcZ-gTlzlRC0viJkD4_XiyVt-9t4w")] bg-no-repeat bg-contain bg-center flex justify-center items-center'>
          <div id="digiImage" className='flex justify-center items-center'>
            <img src={digi.image} alt="" className='w-[14.5rem] h-[14.5rem] rounded-3xl border-2 border-black'/>
          </div>
        </div>
      </div>

      <div id="digiInfo" className='w-full h-full p-10 flex flex-col gap-2'>
        <div id="digiNombre" className='h-10 w-2/5 pl-2 rounded-lg flex items-center'>Name: {digi.name}</div>
        <div id="digiLevel" className='h-10 w-2/5 pl-2 rounded-lg flex items-center'>Level: {digi.level}</div>
        <div id="digiType" className='h-10 w-2/5 pl-2 rounded-lg flex items-center'>Type: {digi.type}</div>
        <div id="digiAtributte" className='h-10 w-2/5 pl-2 rounded-lg flex items-center'>Attribute: {digi.atributte}</div>
        <div id="digiAttack" className='h-10 w-2/5 pl-2 rounded-lg flex items-center'>Attack: {digi.attack}</div>
        <div id="digiDescription" className='h-32 w-5/6 pl-2 rounded-lg'>{digi.description}</div>
        <div id="preEvoDigi" className='h-32 w-full pl-2'>
          <div>Pre-Evolutions:</div>
          <div className='flex gap-2'>{showPre()}</div>
        </div>
        <div id="evoDigi" className='h-32 w-full pl-2'>
          <div>Evolutions:</div>
          <div className='flex gap-2'>{showEvo()}</div>
        </div>
        <div id="variantDigi" className='h-32 w-full pl-2'>
          <div>Variants:</div>
          <div className='flex gap-2'>{showPre()}</div>
        </div>
      </div>      
    </div>
  )
}
export default File