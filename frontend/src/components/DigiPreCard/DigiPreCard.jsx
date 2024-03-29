import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const DigiPreCard = ({id, name, image}) => {


  return (
    <div >
      <Link to={`/file/${id}`}>
        <div id="containerCard" className="flex flex-col items-center border-2 border-[#d06b8e] pb-2 bg-[#d06b8e] max-w-[68px] w-[68px]">
          <img src={image} alt="imagen digimon" className="size-16"/>
          <p className="text-white uppercase text-xs">{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default DigiPreCard