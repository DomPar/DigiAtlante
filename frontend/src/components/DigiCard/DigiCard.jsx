import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const DigiCard = ({id, name, image}) => {


  return (
    <div >
      <Link to={`/file/${id}`}>
        <div id="containerCard" className="flex flex-col items-center">
          <img src={image} alt="imagen digimon" className=""/>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  )
}

export default DigiCard