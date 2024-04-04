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
            name, 
            level, 
            type, 
            atributte: attribute, 
            image: `https://digi-api.com/images/digimon/w/${name.replace(' ','_')}.png`,
            attack,
            description
        })
    }


    return (
        <div className='flex flex-col justify-center items-center h-full w-[70vw] m-auto' style={{ background: 'linear-gradient(to bottom, rgba(176, 220, 232, 0.5), rgba(185, 207, 129, 0.5))' }}>
            <div id="seleccionAccion" className='flex h-[20vh] w-full justify-center items-center'>
                <p className='bg-rose-100 w-[100px] h-[25px] text-center'></p>
                <p onClick={()=>{navigate('/create')}} className='bg-rose-200 w-[350px] h-[25px] text-center cursor-pointer'>Introduce Digi</p>
                <p onClick={()=>{navigate('/relate')}} className='bg-rose-100 w-[350px] h-[25px] text-center cursor-pointer'>Relate Digi</p>
                <p className='bg-rose-100 w-[100px] h-[25px] text-center'></p>
            </div>
            <div className='flex justify-center items-start center w-full h-[80vh]'>
                <img src={`https://digi-api.com/images/digimon/w/${name.replace(' ','_')}.png`} alt="" className='w-2/6'/>
                <form action="" className='flex flex-col justify-center items-center gap-2 w-2/6 bg-rose-100'>
                    <input type="text" autoCapitalize='on' placeholder='Name' onChange={(e) => setName(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <input type="text" autoCapitalize='on' placeholder='Level' onChange={(e) => setLevel(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <input type="text" autoCapitalize='on' placeholder='Type' onChange={(e) => setType(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <select onChange={(e) => setAttribute(e.target.value)} className='w-80 h-8 mt-6 border'>
                        <option value="" selected>Select and attribute</option>
                        <option value="data">Data</option>
                        <option value="vaccine" >Vaccine</option>
                        <option value="virus" >Virus</option>
                    </select>
                    <input type="text" autoCapitalize='on' placeholder='Attack' onChange={(e) => setAttack(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <textarea autoCapitalize='on' placeholder='Description' onChange={(e) => setDescription(e.target.value)} className='w-80 h-28 mt-6 border' />
                    <button onClick={sendData} className='w-20 m-6 border border-sky-500 rounded-full'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create