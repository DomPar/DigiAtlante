import React, { useState } from 'react'
import { introduceDigi } from '../../services/digiService'

const Create = () => {
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
            image: `https://digi-api.com/images/digimon/w/${name}.png`,
            attack,
            description
        })
    }


    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div id="seleccionAccion" className='flex h-[20vh] w-full justify-center items-center'>
                <p className='bg-rose-200 w-[400px] text-center'>Introduce Digi</p>
                <p className='bg-rose-100 w-[400px] text-center'>Relate Digi</p>
            </div>
            <div className='flex justify-center items-start center w-full h-[80vh]'>
                <img src={`https://digi-api.com/images/digimon/w/${name}.png`} alt="" className='w-1/5'/>
                <form action="" className='flex flex-col justify-center items-center w-1/5 gap-2 border border-pink-500'>
                    <input type="text" autoCapitalize='on' placeholder='Name' onChange={(e) => setName(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <input type="text" autoCapitalize='on' placeholder='Level' onChange={(e) => setLevel(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <input type="text" autoCapitalize='on' placeholder='Type' onChange={(e) => setType(e.target.value)} className='w-80 h-8 mt-6 border' />
                    <select onChange={(e) => setAttribute(e.target.value)} className='w-80 h-8 mt-6 border'>
                        <option value="data" selected>Data</option>
                        <option value="vaccine" selected>Vaccine</option>
                        <option value="virus" selected>Virus</option>
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