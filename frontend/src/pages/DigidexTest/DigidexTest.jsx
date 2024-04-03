import { useEffect, useState } from "react"
import { getAllDigi } from "../../services/digiService"
import DigiDisp from "../../components/DigiDisp/DigiDisp"

const DigidexTest = () => {
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
            return <DigiDisp key={index} id={digi.id} name={digi.name} image={digi.image}/>
        })
        return result
    }

    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }

  return (
    <div className="overflow-y-auto h-full">
      <div className="h-[50px] w-full bg-white flex items-center pl-16 ">
        <label htmlFor="search" className="inline-block mr-2">Search:</label>
        <input type="text" onChange={handleChange} className="w-[200px] h-[30px] rounded-3xl pl-2 border-2"/>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 p-2 w-[70vw] m-auto bg-white bg-opacity-50">
        {digiDex()}
      </div>
    </div>
  )
}

export default DigidexTest