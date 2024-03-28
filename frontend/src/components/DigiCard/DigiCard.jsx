import { useEffect, useState } from "react"

const DigiCard = ({id, name, image}) => {



  return (
    <div >
      <div id="containerCard" className="flex flex-col items-center">
        <img src={image} alt="imagen digimon" className=""/>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default DigiCard