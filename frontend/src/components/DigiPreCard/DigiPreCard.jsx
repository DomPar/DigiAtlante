import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const DigiPreCard = ({id, name, image}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div >
      <Link to={`/file/${id}`}>
        <div id="containerCard" className="flex flex-col items-center relative size-[50px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <img src={image} alt="imagen digimon" className=""/>
          {isHovered && <div className="absolute inset-0 flex items-center justify-center text-white text-with-border font-bold bg-black bg-opacity-0 hover:bg-opacity-50 transition-bg-opacity duration-1000 ${isHovered ? 'opacity-50' : 'opacity-0'}"> {name} </div>}
        </div>
      </Link>
    </div>
  )
}

export default DigiPreCard