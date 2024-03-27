import { useEffect, useState } from "react"
import { getAllDigi } from "../../services/digiService"
import DigiCard from "../../components/DigiCard/DigiCard"

const Digidex = () => {
    const[digis, setDigis] = useState([])

    useEffect(() => {
     const GetDigis = async () => {
        const {result} = await getAllDigi()
        setDigis(result)
     }
    GetDigis()
    }, [])

    const digiDex =() =>{
        const result = digis.map((digi)=>{
            return <DigiCard digi={digi}/>
        })
        return result
    }
  return (
    <div>
        {digiDex()}
    </div>
  )
}

export default Digidex