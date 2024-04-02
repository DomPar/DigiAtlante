import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const DigiCard = ({id, name, image}) => {
  

  return (
    <div >
      <Link to={`/file/${id}`}>
          <div id="containerCard" className="flex flex-col items-center border-2 border-[#d06b8e] pb-2 bg-[#d06b8e]">
            <img src={image} alt="imagen digimon" className=""/>
            <p className="text-white uppercase pt-0.5">{name}</p>
          </div>
      </Link>
    </div>
  )
}

export default DigiCard