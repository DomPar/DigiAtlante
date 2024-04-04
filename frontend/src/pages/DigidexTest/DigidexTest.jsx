import { useEffect, useState } from "react"
import { getAllDigi } from "../../services/digiService"
import DigiDisp from "../../components/DigiDisp/DigiDisp"
import "./DigidexTest.css"

const DigidexTest = () => {
    const [digis, setDigis] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectAtt, setSelectAtt] = useState('')
    const [selectLevel, setSelectLevel] = useState('')

    useEffect(() => {
      const getDigis = async () => {
        const {result} = await getAllDigi(searchTerm, selectAtt, selectLevel)
            setDigis(result)
        }
        getDigis()
    }, [searchTerm, selectAtt, selectLevel])

    const digiDex =() =>{
        const result = digis.map((digi, index)=>{
            return <DigiDisp key={index} id={digi.id} name={digi.name} image={digi.image}/>
        })
        return result
    }

    const handleChange = (e) => {
      setSearchTerm(e.target.value)
    }
    const handleSelect = (e) => {
      setSelectAtt(e.target.value)
    }
    const handleSelectLevel = (e) => {
      setSelectLevel(e.target.value)
    }

  return (
    <div className="h-full flex justify-center">
      <div id="dexDisplay" className="overflow-y-auto h-full w-[70vw] " >
        <div  className="flex flex-wrap justify-center items-center gap-2 p-2 m-auto" >
          <div className="h-[50px] w-[70vw] m-auto flex items-center pl-16 gap-16">
            <div className="">
              <label htmlFor="search" className="inline-block mr-2 text-with-border">Search:</label>
              <input type="text" onChange={handleChange} className="w-[200px] h-[30px] rounded-3xl pl-2 border-2"/>
            </div>
            <div className="flex gap-16">
              <select value={selectAtt} onChange={(handleSelect) } className="w-[130px] h-[30px] rounded-3xl pl-2 border-2 text-black">
              <option value="" className="text-black">Attribute</option>
                <option value="data" className="text-black">Data</option>
                <option value="virus" className="text-black">Virus</option>
                <option value="vaccine" className="text-black">Vaccine</option>
              </select>
              <select value={selectLevel} onChange={(handleSelectLevel) } className="w-[100px] h-[30px] rounded-3xl pl-2 border-2 text-black">
              <option value="" className="text-black">Level</option>
                <option value="Fresh" className="text-black">Fresh</option>
                <option value="In training" className="text-black">In Training</option>
                <option value="Rookie" className="text-black">Rookie</option>
                <option value="Champion" className="text-black">Champion</option>
                <option value="Ultimate" className="text-black">Ultimate</option>
                <option value="Mega" className="text-black">Mega</option>
              </select>
            </div>
          </div>
          {digiDex()}
        </div>
      </div>
    </div>
    
  )
}

export default DigidexTest