import React, { useState, useEffect } from 'react'
import { introduceDigi } from '../../services/digiService'
import { useNavigate } from 'react-router-dom'
import { getAllDigi } from "../../services/digiService"

const Relate = () => {
    const navigate = useNavigate();

    const [currentPreId, setCurrentPreId] = useState('')
    const [currentPreName, setCurrentPreName] = useState('')
    const [preId, setPreId] = useState('')
    const [preName, setPreName] = useState('')




    const[digis, setDigis] = useState([])
    useEffect(() => {
      
     const getDigis = async () => {
        const {result} = await getAllDigi()
        setDigis(result)
     }
    getDigis()
    }, [])

    const showDigis =() =>{
        const result = digis.map((digi)=>{
            return <option value={[digi.id, digi.name]}>{digi.id} - {digi.name}</option>
        })
        return result
    }
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div id="seleccionAccion" className='flex h-[20vh] w-full justify-center items-center'>
                <p className='bg-rose-100 w-[50px] h-[25px] text-center'></p>
                <p onClick={()=>{navigate('/create')}} className='bg-rose-100 w-[350px] h-[25px] text-center cursor-pointer'>Introduce Digi</p>
                <p onClick={()=>{navigate('/relate')}} className='bg-rose-200 w-[350px] h-[25px] text-center cursor-pointer'>Relate Digi</p>
                <p className='bg-rose-100 w-[50px] h-[25px] text-center'></p>
            </div>
            <div className='flex flex-col justify-center items-center w-full h-[80vh]'>
                <div id="preEvo" className='flex justify-between w-[60vw]'>
                    <div className='flex justify-center items-center w-3/6'>
                        <img src={`https://digi-api.com/images/digimon/w/${currentPreName}.png`} alt="" className='h-[20vh]'/>
                        <select onChange={(e) => {
                            setCurrentPreId(e.target.value[0])
                            setCurrentPreName(e.target.value.slice(2))
                            console.log(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                    </div>
                    <div className='flex justify-center items-center w-3/6'>
                        <select onChange={(e) => {
                            setPreId(e.target.value[0])
                            setPreName(e.target.value.slice(2))
                            console.log(e.target.value.slice(2))
                        }} className='h-8'>
                            {showDigis()}
                        </select>
                        <img src={`https://digi-api.com/images/digimon/w/${preName}.png`} alt="" className='h-[20vh]'/>
                    </div>
                </div>
                <div id="evo" className='flex justify-between w-[60vw]'>
                    <div className='flex justify-center w-3/6'>
                        <img src={`https://digi-api.com/images/digimon/w/Agumon.png`} alt="" className='h-[20vh]'/>
                        <select>
                            {showDigis()}
                        </select>
                    </div>
                    <div className='flex justify-center w-3/6'>
                        <select>
                            {showDigis()}
                        </select>
                        <img src={`https://digi-api.com/images/digimon/w/Agumon.png`} alt="" className='h-[20vh]'/>
                    </div>
                </div>
                <div id="variant" className='flex justify-between w-[60vw]'>
                    <div className='flex justify-center w-3/6'>
                        <img src={`https://digi-api.com/images/digimon/w/Agumon.png`} alt="" className='h-[20vh]'/>
                        <select>
                            {showDigis()}
                        </select>
                    </div>
                    <div className='flex justify-center w-3/6'>
                        <select>
                            {showDigis()}
                        </select>
                        <img src={`https://digi-api.com/images/digimon/w/Agumon.png`} alt="" className='h-[20vh]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Relate