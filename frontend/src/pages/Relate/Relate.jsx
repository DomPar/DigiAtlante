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
            return <option key={index} value={`${digi.id}·${digi.name}`}>{digi.id} - {digi.name}</option>
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
        <div className='flex flex-col justify-center items-center h-full w-[70vw] m-auto gradient'>
            <div id="seleccionAccion" className='flex h-[20vh] w-full justify-center items-center'>
                <p className='bg-black bg-opacity-50 w-[100px] h-[25px] text-center'></p>
                <p onClick={()=>{navigate('/create')}} className='bg-black bg-opacity-50 w-[350px] h-[25px] text-center cursor-pointer'>Introduce Digi</p>
                <p onClick={()=>{navigate('/relate')}} className='bg-black bg-opacity-80 w-[350px] h-[25px] text-center cursor-pointer'>Relate Digi</p>
                <p className='bg-black bg-opacity-50 w-[100px] h-[25px] text-center'></p>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-[80vh] gap-10'>
                <div id="preEvo" className='flex justify-between items-center w-[60vw] bg-black bg-opacity-50 p-2'>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <div className='w-[150px] h-[150px] bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${currentPreName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                        <select onChange={(e) => {
                            const [id, name] = e.target.value.split('·')
                            setCurrentPreId(id)
                            setCurrentPreName(name)
                        }} className='h-8 text-black'>
                            {showDigis()}
                        </select>
                    </div>
                    <button onClick={handlePreClick} className='w-[100px] h-[40px] border-2 bg-black rounded-2xl'>Add Pre</button>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <select onChange={(e) => {
                            const [id, name] = e.target.value.split('·')
                            setPreId(id)
                            setPreName(name)
                        }} className='h-8 text-black'>
                            {showDigis()}
                        </select>
                        <div className='w-[150px] h-[150px] bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${preName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                    </div>
                </div>
                <div id="evo" className='flex justify-between items-center w-[60vw] bg-black bg-opacity-50 p-2'>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <div className='w-[150px] h-[150px] bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${currentEvoName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                        <select onChange={(e) => {
                            const [id, name] = e.target.value.split('·')
                            setCurrentEvoId(id)
                            setCurrentEvoName(name)
                        }} className='h-8 text-black'>
                            {showDigis()}
                        </select>
                    </div>
                    <button onClick={handleEvoClick} className='w-[100px] h-[40px] border-2 bg-black rounded-2xl'>Add Evo</button>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <select onChange={(e) => {
                            const [id, name] = e.target.value.split('·')
                            setEvoId(id)
                            setEvoName(name)
                        }} className='h-8 text-black'>
                            {showDigis()}
                        </select>
                        <div className='w-[150px] h-[150px] bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${evoName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                    </div>
                </div>
                <div id="variant" className='flex justify-between items-center w-[60vw] bg-black bg-opacity-50 p-2'>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <div className='w-[150px] h-[150px] bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${currentVarName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                        <select onChange={(e) => {
                            const [id, name] = e.target.value.split('·')
                            setCurrentVarId(id)
                            setCurrentVarName(name)
                        }} className='h-8 text-black'>
                            {showDigis()}
                        </select>
                    </div>
                    <button onClick={handleVarClick} className='w-[100px] h-[40px] border-2 bg-black rounded-2xl'>Add Var</button>
                    <div className='flex justify-evenly items-center w-3/6'>
                        <select onChange={(e) => {
                            const [id, name] = e.target.value.split('·')
                            setVarId(id)
                            setVarName(name)
                        }} className='h-8 text-black'>
                            {showDigis()}
                        </select>
                        <div className='w-[150px] h-[150px] bg-white'>
                            <img src={`https://digi-api.com/images/digimon/w/${varName.replace(' ','_')}.png`} alt="" className='max-h-fit'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relate