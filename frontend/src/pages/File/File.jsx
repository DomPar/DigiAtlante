import React from 'react'


const File = () => {
  return (
    <div id='containerFile' className='w-full h-full bg-orange-100 flex'>
      <div id="digiImageContainer" className='bg-green-100 w-full h-full flex justify-center items-center'>
        <div id="digiImageDevice" className='w-4/5 h-4/5 bg-[url("https://lozshop.com/wp-content/uploads/2021/07/SC-5009-Digimon-Digivice.png")] bg-no-repeat	bg-center flex justify-center items-center'>
          <div id="digiImage" className='flex justify-center items-center'>
            <img src="https://digi-api.com/images/digimon/w/Koromon.png" alt="" className='w-88 h-88'/>
          </div>
        </div>
      </div>

      <div id="digiInfo" className='bg-cyan-100 w-full h-full p-10 flex flex-col gap-2'>
        <div id="digiNombre" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Nombre</div>
        <div id="digiLevel" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Level</div>
        <div id="digiType" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Type</div>
        <div id="digiAtributte" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Attribute</div>
        <div id="digiAttack" className='h-10 w-full pl-2 bg-sky-500 flex items-center'>Attack</div>
        <div id="digiDescription" className='h-32 w-full pl-2 bg-sky-500 flex items-center'>Description description Description description   Description description Description description Description description Description description Description description 
        Description description
        </div>
        <div id="preEvoDigi" className='h-28 w-full border border-sky-500'></div>
        <div id="evoDigi" className='h-28 w-full border border-sky-500'></div>
        <div id="variantDigi" className='h-28 w-full border border-sky-500'></div>
      </div>      
    </div>
  )
}
export default File