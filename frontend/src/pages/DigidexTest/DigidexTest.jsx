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
      <div id="dexDisplay" className="overflow-y-auto h-full w-[70vw]" style={{ background: 'linear-gradient(to bottom, rgba(176, 220, 232, 0.7), rgba(185, 207, 129, 0.7))' }}>
        <div  className="flex flex-wrap justify-center items-center gap-2 p-2 m-auto" >
          <div className="h-[50px] w-[70vw] m-auto flex items-center pl-16">
            <label htmlFor="search" className="inline-block mr-2">Search:</label>
            <input type="text" onChange={handleChange} className="w-[200px] h-[30px] rounded-3xl pl-2 border-2"/>
            <div>
              <select value={selectAtt} onChange={(handleSelect) } className="w-[100px] h-[30px] rounded-3xl pl-2 border-2 bg-transparent">
              <option value="">Attribute</option>
                <option value="data">Data</option>
                <option value="virus">Virus</option>
                <option value="vaccine">Vaccine</option>
              </select>
            </div>
            <div>
              <select value={selectLevel} onChange={(handleSelectLevel) } className="w-[100px] h-[30px] rounded-3xl pl-2 border-2 bg-transparent">
              <option value="">Level</option>
                <option value="Fresh">Fresh</option>
                <option value="In training">In Training</option>
                <option value="Rookie">Rookie</option>
                <option value="Champion">Champion</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
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