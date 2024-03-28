import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const DigiPreCard = ({id, name, image}) => {


  return (
    <div >
      <Link to={`/file/${id}`}>
        <div id="containerCard" className="flex flex-col items-center p-2">
          <img src={image} alt="imagen digimon" className="size-16"/>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default DigiPreCard