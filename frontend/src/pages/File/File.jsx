import React from 'react'


const File = () => {
  return (
    <div id='containerFile' className='w-full h-full bg-orange-100 flex'>
      <div id="digiImage" className='bg-green-100 w-full h-full'>

      </div>
      <div id="digiInfo" className='bg-cyan-100 w-full h-full flex-column gap-10'>
        <div id="digiNombre" className='h-10 w-full'>Nombre</div>
        <div id="digiLevel" className='h-10 w-full'>Level</div>
        <div id="digiType" className='h-10 w-full'>Type</div>
        <div id="digiAtributte" className='h-10 w-full'>Attribute</div>
        <div id="digiAttack" className='h-10 w-full'>Attack</div>
        <div id="digiDescription" className='h-40 w-full'>Description description Description description Description description Description description Description description Description description Description description Description description</div>
        <div id="preEvoDigi" className='h-100 w-full bg-orange-100 border-solid'></div>
        <div id="evoDigi" className='h-100 w-full bg-orange-100 border-solid'></div>
        <div id="variantDigi" className='h-100 w-full bg-orange-100 border-solid'></div>
      </div>      
    </div>
  )
}

export default File