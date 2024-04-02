import { useEffect, useState } from "react"
import { getAllDigi } from "../../services/digiService"
import DigiCard from "../../components/DigiCard/DigiCard"

const Digidex = () => {
    const[digis, setDigis] = useState([])

    useEffect(() => {
      
     const getDigis = async () => {
        const {result} = await getAllDigi()
        setDigis(result)
     }
    getDigis()
    }, [])

    const digiDex =() =>{
        const result = digis.map((digi, index)=>{
            return <DigiCard key={index} id={digi.id} name={digi.name} image={digi.image}/>
        })
        return result
    }
  return (
    <div className="pt-8">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {digiDex()}
      </div>
    </div>
  )
}

export default Digidex