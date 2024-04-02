import { useEffect, useState } from "react"
import { getAllDigi } from "../../services/digiService"
import DigiCard from "../../components/DigiCard/DigiCard"

const Digidex = () => {
    const [digis, setDigis] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
      const getDigis = async () => {
          const {result} = await getAllDigi(searchTerm)
          setDigis(result)
        }
        getDigis()
    }, [searchTerm])

    const digiDex =() =>{
        const result = digis.map((digi, index)=>{
            return <DigiCard key={index} id={digi.id} name={digi.name} image={digi.image}/>
        })
        return result
    }

    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }

  return (
    <div className="overflow-y-auto h-full">
      <div className="h-[100px] w-[80vw] m-auto flex items-center pl-16">
        <label htmlFor="search" className="inline-block mr-2">Search:</label>
        <input type="text" onChange={handleChange} className="w-[200px] h-[30px] rounded-3xl pl-2"/>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
        {digiDex()}
      </div>
    </div>
  )
}

export default Digidex