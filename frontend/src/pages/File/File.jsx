import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getAllPre, getAllEvo, getAllVar, getOneDigi } from '../../services/digiService';
import DigiPreCard from '../../components/DigiPreCard/DigiPreCard';
import './File.css'



const File = () => {
  const [digi, setDigi] = useState({});
  const [pre, setPre] = useState([])
  const [evos, setEvos] = useState([])
  const [variants, setVariants] = useState([])
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
       setPre(result[0].ChildPre)
    }
    getPre()
   }, [digiId])

  const showPre = () => {
    const result = pre.map((preevo, index)=>{
      return <DigiPreCard key={index} id={preevo.id} name={preevo.name} image={preevo.image}/>
  })
  return result
  }

  useEffect(() => {
      
    const getEvos = async () => {
       const {result} = await getAllEvo(digiId)
       setEvos(result[0].ChildEvo)
    }
    getEvos()
  }, [digiId])
  
  const showEvo = () => {
    const result = evos.map((evo, index)=>{
      return <DigiPreCard key={index} id={evo.id} name={evo.name} image={evo.image}/>
  })
  return result
  }

  useEffect(() => {
      
    const getVar = async () => {
       const {result} = await getAllVar(digiId)
       setVariants(result[0].ChildVar)
    }
    getVar()
  }, [digiId])
  
  const showVar = () => {
    const result = variants.map((variant, index)=>{
      return <DigiPreCard key={index} id={variant.id} name={variant.name} image={variant.image}/>
  })
  return result
  }

  return (
    <div id='containerFile' className='w-[70%] h-full flex sm:flex-col'>
      <div id="digiImageContainer" className='w-full h-full flex justify-center items-center'>
        <div id="digiImageDevice" className='bg-black bg-opacity-50 flex justify-center items-center'>
          <div id="digiImage" className='flex justify-center items-center relative'>
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
              <img src={digi.image} alt="" className='w-[400px] h-[400px] m-12'/>
            </div>
        </div>
      </div>
      <div id="digiInfo" className='w-full h-[90vh] p-10 flex flex-col gap-2 bg-black bg-opacity-50 text-with-border'>
        <div id="digiData" className=' h-3/6'>
          <div id="digiNombre" className='pl-2 rounded-lg'>NAME: {digi.name}</div>
          <div id="digiLevel" className='pl-2 rounded-lg'>LEVEL: {digi.level}</div>
          <div id="digiType" className='pl-2 rounded-lg'>TYPE: {digi.type}</div>
          <div id="digiAttribute" className='pl-2 rounded-lg'>ATTRIBUTE: {digi.atributte}</div>
          <div id="digiAttack" className='pl-2 rounded-lg'>ATTACK: {digi.attack}</div>
          <div id="digiDescription" className='h-32 w-5/6 pl-2 rounded-lg'>{digi.description}</div>
        </div> 
        <div id="digiEvos">
          <div id="preEvoDigi" className='h-28 w-full pl-2'>
            <div className='mb-2'>PRE-EVOLUTIONS:</div>
            <div className='flex gap-2'>{showPre()}</div>
          </div>
          <div id="evoDigi" className='h-28 w-full pl-2'>
            <div className='mb-2'>EVOLUTIONS:</div>
            <div className='flex gap-2'>{showEvo()}</div>
          </div>
          <div id="variantDigi" className='h-28 w-full pl-2'>
            <div className='mb-2'>VARIANTS:</div>
            <div className='flex gap-2'>{showVar()}</div>
          </div>
        </div>
      </div>      
    </div>
  )
}
export default File