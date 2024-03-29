import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')
    const [attribute, setAttribute] = useState('')
    const [attack, setAttack] = useState('')
    const [description, setDescription] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex justify-center items-center h-full'>
            <img src={`https://digi-api.com/images/digimon/w/${name}.png`} alt="" className='w-1/5'/>
            <form action="" className='flex flex-col justify-center items-center w-1/5 gap-2 border border-pink-500'>
                <input type="text" autoCapitalize='on' placeholder='Name' onChange={(e) => setName(e.target.value)} className='w-80 h-8 mt-6 border' />
                <input type="text" autoCapitalize='on' placeholder='Level' onChange={(e) => setLevel(e.target.value)} className='w-80 h-8 mt-6 border' />
                <input type="text" autoCapitalize='on' placeholder='Type' onChange={(e) => setType(e.target.value)} className='w-80 h-8 mt-6 border' />
                <input type="text" autoCapitalize='on' placeholder='Attribute' onChange={(e) => setAttribute(e.target.value)} className='w-80 h-8 mt-6 border' />
                <input type="text" autoCapitalize='on' placeholder='Attack' onChange={(e) => setAttack(e.target.value)} className='w-80 h-8 mt-6 border' />
                <textarea autoCapitalize='on' placeholder='Description' onChange={(e) => setDescription(e.target.value)} className='w-80 h-28 mt-6 border' />
                <button type="submit" onClick={handleClick} className='w-20 border border-sky-500 rounded-full'>Submit</button>
            </form>
        </div>
    )
}

export default Create