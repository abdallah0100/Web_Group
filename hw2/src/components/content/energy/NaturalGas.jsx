import { useEffect, useState } from "react"
import axios from "axios"
import { getProcessTypeEncounters } from "../../../utils/NaturalGasUtils"
import { getHighest_returnAmount } from "../../../utils/DataUtils"
import ChartComp from "./ChartComp"

function NaturalGas({title, description}){
    const [processTypes, setProcessTypes] = useState(-1)
    useEffect(()=>{
        let url = "https://api.eia.gov/v2/natural-gas/sum/lsum/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=monthly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=200&start=2022-01&end=2022-12"
        axios.get(url).then(res => setProcessTypes(getProcessTypeEncounters(res.data.response.data))).catch(err => console.log(err))
    }, [])
    return(<div>
        <div className="pt-6 rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white">
            <h1 className="dark:text-white text-xl font-semibold mb-2">{title}</h1>
            <p>{description}</p>
        </div>
        <div className="pt-5 p-6">
            <ChartComp title="U.S Natural Gas Processing Categories" data={processTypes} chartType="pie" id="1" label="process-name" value="occurrence" />
        </div>
    </div>)
}

export default NaturalGas