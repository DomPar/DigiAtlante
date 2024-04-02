import React, { useState, useEffect } from 'react'
import { addEvo, addPre, addVar} from '../../services/digiService'
import { useNavigate } from 'react-router-dom'
import { getAllDigi } from "../../services/digiService"

const Relate = () => {
    const navigate = useNavigate();

    const [currentPreId, setCurrentPreId] = useState('')
    const [currentPreName, setCurrentPreName] = useState('')
    const [preId, setPreId] = useState('')
    const [preName, setPreName] = useState('')

    const [currentEvoId, setCurrentEvoId] = useState('')
    const [currentEvoName, setCurrentEvoName] = useState('')
    const [evoId, setEvoId] = useState('')
    const [evoName, setEvoName] = useState('')

    const [currentVarId, setCurrentVarId] = useState('')
    const [currentVarName, setCurrentVarName] = useState('')
    const [varId, setVarId] = useState('')
    const [varName, setVarName] = useState('')

    const[digis, setDigis] = useState([])
    useEffect(() => {
      
     const getDigis = async () => {
        const {result} = await getAllDigi()
        setDigis(result)
     }
    getDigis()
    }, [])

    const showDigis = () =>{
        const result = digis.map((digi, index)=>{
            return <option key={index} value={[digi.id, digi.name]}>{digi.id} - {digi.name}</option>
        })
        return result
    }

    const handlePreClick = async () => {
        await addPre({parentId: currentPreId, preevoId: preId})
        setCurrentPreName('')
        setPreName('')
    }

    const handleEvoClick = async () => {
        await addEvo({parentId: currentEvoId, evoId: evoId})
        setCurrentEvoName('')
        setEvoName('')
    }

    const handleVarClick = async () => {
        await addVar({parentId: currentVarId, variantId: varId})
        setCurrentVarName('')
        setVarName('')
    }

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div id="seleccionAccion" className='flex h-[20vh] w-full justify-center items-center'>
                <p className='bg-rose-100 w-[50px] h-[25px] text-center'></p>
                <p onClick={()=>{navigate('/create')}} className='bg-rose-100 w-[350px] h-[25px] text-center cursor-pointer'>Introduce Digi</p>
                <p onClick={()=>{navigate('/relate')}} className='bg-rose-200 w-[350px] h-[25px] text-center cursor-pointer'>Relate Digi</p>
                <p className='bg-rose-100 w-[50px] h-[25px] text-center'></p>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-[80vh] gap-10'>
                <div id="preEvo" className='flex justify-between items-center w-[60vw] bg-rose-100 p-2'>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <div className='w-[150px] h-[150px] border border-rose-500 bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${currentPreName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                        <select onChange={(e) => {
                            setCurrentPreId(e.target.value[0])
                            setCurrentPreName(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                    </div>
                    <button onClick={handlePreClick} className='w-[100px] h-[40px] bg-[#ffb6c1] rounded-2xl'>Add Pre</button>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <select onChange={(e) => {
                            setPreId(e.target.value[0])
                            setPreName(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                        <div className='w-[150px] h-[150px] border border-rose-500 bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${preName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                    </div>
                </div>
                <div id="evo" className='flex justify-between items-center w-[60vw] bg-rose-100 p-2'>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <div className='w-[150px] h-[150px] border border-rose-500 bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${currentEvoName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                        <select onChange={(e) => {
                            setCurrentEvoId(e.target.value[0])
                            setCurrentEvoName(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                    </div>
                    <button onClick={handleEvoClick} className='w-[100px] h-[40px] bg-[#ffb6c1] rounded-2xl'>Add Evo</button>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <select onChange={(e) => {
                            setEvoId(e.target.value[0])
                            setEvoName(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                        <div className='w-[150px] h-[150px] border border-rose-500 bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${evoName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                    </div>
                </div>
                <div id="variant" className='flex justify-between items-center w-[60vw] bg-rose-100 p-2'>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <div className='w-[150px] h-[150px] border border-rose-500 bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${currentVarName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                        <select onChange={(e) => {
                            setCurrentVarId(e.target.value[0])
                            setCurrentVarName(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                    </div>
                    <button onClick={handleVarClick} className='w-[100px] h-[40px] bg-[#ffb6c1] rounded-2xl'>Add Var</button>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <select onChange={(e) => {
                            setVarId(e.target.value[0])
                            setVarName(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                        <div className='w-[150px] h-[150px] border border-rose-500 bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${varName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relate