import { useRef, useState } from "react"
import axios from "axios"
import { getCheapest5, infoData, get5MostExp } from "../../../utils/DataUtils"
import ChartComp from "./ChartComp"

function Electricity({title, description}){
    const yearArea = useRef()
    const fetchButton = useRef()
    const defaultSelectValue = useRef()
    const selectedInfo = useRef()

    const checkBoxDiv = useRef()
    const cheapStates = useRef()
    const expStates = useRef()
    const msgLabel = useRef()
    const year = useRef()

    const [cheapStatesData, setCheapStatesData] = useState(-1)
    const [expStatesData, setExpStatesData] = useState(-1)

    const onInformationSelect = ()=>{
        yearArea.current.hidden = false
        defaultSelectValue.current.disabled = true
    }
    const onYearInput = ()=>{
        if (selectedInfo.current.value == "Retail prices"){
            checkBoxDiv.current.hidden = false
            fetchButton.current.hidden = true
        }else{
            checkBoxDiv.current.hidden = true
            fetchButton.current.hidden = false
        }
    }
    const onDataRankingSelect = ()=>{
        fetchButton.current.hidden = !(cheapStates.current.checked || expStates.current.checked)
    }

    const fetch = ()=>{
        if (year.current.value > 2023 || year.current.value < 2011){
            msgLabel.current.textContent = "Invalid year input, please input 2011-2023"
            msgLabel.current.hidden = false
            return
        }
        msgLabel.current.hidden = true
        let yearFilter = "&start=" + year.current.value + "&end="+year.current.value
        let url = infoData[selectedInfo.current.value].apiUrl + yearFilter
        axios.get(url).then(res => {
            if (selectedInfo.current.value == "Industry & Commercial Consumption"){
                console.log("ToDo ...")
            }else{
                if (cheapStates.current.checked){
                    setCheapStatesData(getCheapest5(res.data.response.data))
                }else{
                    setCheapStatesData(-1)
                }
                if (expStates.current.checked){
                    setExpStatesData(get5MostExp(res.data.response.data))
                }else{
                    setExpStatesData(-1)
                }
            }
        }).catch(err => console.log(err))
    } 

    return(
    <div>
        <div className="pt-6 rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white">
            <h1 className="dark:text-white text-xl font-semibold mb-2">{title}</h1>
            <p>{description}</p>
        </div>
        <div className="pt-5 p-6">
            Select The information you would like to show
            <select ref={selectedInfo} onChange={onInformationSelect} className="ml-2 bg-blue-500 mt-1 pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option ref={defaultSelectValue} defaultValue>Select an option</option>
                <option>All</option>
                <option>Retail prices</option>
                <option>Industry & Commercial Consumption</option>
            </select>
            <label ref={yearArea} className="ml-2" hidden>Enter Year: 
                <input ref={year} onChange={onYearInput} type="number" className="bg-blue-500 mt-1 pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"></input>
            </label>
            <div hidden ref={checkBoxDiv}>
                <ul onChange={onDataRankingSelect}>
                    <li>
                        <input ref={expStates} type="checkbox" id="top5_expensive" />
                        <label htmlFor="top5_expensive" className="ml-2">Most Expensive 5 states</label>
                    </li>
                    <li>
                        <input ref={cheapStates} type="checkbox" id="top5_cheap" />
                        <label htmlFor="top5_cheap" className="ml-2">Cheapest 5 states</label>
                    </li>
                </ul>
            </div>
            <p>
                <button hidden className="ml-2" ref={fetchButton} onClick={fetch}>Fetch</button><br />
                <label ref={msgLabel} hidden></label>
            </p>
        </div>
        <ChartComp title="5 Most Expensive States" data={expStatesData} chartType="bar" id="1" />
        <ChartComp title="5 Cheapest States" data={cheapStatesData} chartType="bar" id="2" />
    </div>);
}

export default Electricity