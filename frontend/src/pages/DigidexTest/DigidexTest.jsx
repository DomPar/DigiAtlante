import { useEffect, useState } from "react"
import { getAllDigi, getAllDigiData } from "../../services/digiService"
import DigiDisp from "../../components/DigiDisp/DigiDisp"
import "./DigidexTest.css"

const DigidexTest = () => {
    const [digis, setDigis] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectAtt, setSelectAtt] = useState('')
    const [selectLevel, setSelectLevel] = useState('')

    useEffect(() => {
      const getDigis = async () => {
        switch (selectAtt) {
          case '':
            const {result} = await getAllDigi(searchTerm)
            setDigis(result)
            break;
          case 'data':
            const resultData = await getAllDigiData(searchTerm)
            setDigis(resultData)
            break;
        }
        }
        getDigis()
    }, [searchTerm, selectAtt])

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

  return (
    <div className="h-full flex justify-center">
      <div id="dexDisplay" className="overflow-y-auto h-full w-[70vw]" style={{ background: 'linear-gradient(to bottom, rgba(176, 220, 232, 0.7), rgba(185, 207, 129, 0.7))' }}>
        <div  className="flex flex-wrap justify-center items-center gap-2 p-2 m-auto" >
          <div className="h-[50px] w-[70vw] m-auto flex items-center pl-16">
            <label htmlFor="search" className="inline-block mr-2">Search:</label>
            <input type="text" onChange={handleChange} className="w-[200px] h-[30px] rounded-3xl pl-2 border-2"/>
            <div>
              <select value={selectAtt} onChange={(handleSelect) }>
              <option value="">Filter by attribute</option>
                <option value="data">Data</option>
                <option value="virus">Virus</option>
                <option value="vaccine">Vaccine</option>
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