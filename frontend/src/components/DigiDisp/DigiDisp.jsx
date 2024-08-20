import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const DigiDisp = ({id, name, image}) => {
  const [isHovered, setIsHovered] = useState(false);
  

  return (
    <div >
      <Link to={`/file/${id}`}>
          <div id="containerCard" className="flex flex-col items-center relative size-[300px] opacity-90" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={image} alt="imagen digimon" className=""/>
            {isHovered && <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-with-border bg-black bg-opacity-0 hover:bg-opacity-50 transition-bg-opacity duration-1000 ${isHovered ? 'opacity-50' : 'opacity-0'}"> {name} </div>}
          </div>
      </Link>
    </div>
  )
}

export default DigiDisp