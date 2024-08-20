import React, { useState } from 'react'
import { introduceDigi } from '../../services/digiService'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')
    const [attribute, setAttribute] = useState('')
    const [attack, setAttack] = useState('')
    const [description, setDescription] = useState('')



    const sendData = async () =>{
        await introduceDigi({
            name: `${name.replace(' ','')}`, 
            level, 
            type, 
            atributte: attribute, 
            image: `https://digi-api.com/images/digimon/w/${name.replace(' ','_')}.png`,
            attack,
            description
        })
    }


    return (
        <div className='flex flex-col justify-center items-center h-full w-[70vw] m-auto' >
            <div id="seleccionAccion" className='flex h-[20vh] w-full justify-center items-center'>
                <p className='bg-black bg-opacity-50 w-[100px] h-[25px] text-center'></p>
                <p onClick={()=>{navigate('/create')}} className='bg-black bg-opacity-80 w-[350px] h-[25px] text-center cursor-pointer'>Introduce Digi</p>
                <p onClick={()=>{navigate('/relate')}} className='bg-black bg-opacity-50 w-[350px] h-[25px] text-center cursor-pointer'>Relate Digi</p>
                <p className='bg-black bg-opacity-50 w-[100px] h-[25px] text-center'></p>
            </div>
            <div className='flex justify-center items-start center w-full h-[80vh]'>
                <img src={`https://digi-api.com/images/digimon/w/${name.replace(' ','_')}.png`} alt="" className='w-2/6'/>
                <form action="" className='flex flex-col justify-center items-center gap-2 w-2/6 bg-black bg-opacity-50'>
                    <input type="text" autoCapitalize='on' placeholder='Name' onChange={(e) => setName(e.target.value)} className='w-80 h-8 mt-6 border text-black pl-2' />
                    <input type="text" autoCapitalize='on' placeholder='Level' onChange={(e) => setLevel(e.target.value)} className='w-80 h-8 mt-6 border text-black pl-2' />
                    <input type="text" autoCapitalize='on' placeholder='Type' onChange={(e) => setType(e.target.value)} className='w-80 h-8 mt-6 border text-black pl-2' />
                    <select onChange={(e) => setAttribute(e.target.value)} className='w-80 h-8 mt-6 border text-black pl-2'>
                        <option value="" selected>Select and attribute</option>
                        <option value="data">Data</option>
                        <option value="vaccine" >Vaccine</option>
                        <option value="virus" >Virus</option>
                    </select>
                    <input type="text" autoCapitalize='on' placeholder='Attack' onChange={(e) => setAttack(e.target.value)} className='w-80 h-8 mt-6 border text-black pl-2' />
                    <textarea autoCapitalize='on' placeholder='Description' onChange={(e) => setDescription(e.target.value)} className='w-80 h-28 mt-6 border text-black pl-2' />
                    <button onClick={sendData} className='w-[100px] h-[40px] m-6 border-2 bg-black rounded-full'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create