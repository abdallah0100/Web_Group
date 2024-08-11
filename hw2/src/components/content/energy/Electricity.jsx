import { useRef, useState } from "react"
import axios from "axios"
import { getLowest_returnAmount, electricityApiData, getHighest_returnAmount } from "../../../utils/DataUtils"
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
    const [lowestConsumption, setLowestConsumption] = useState(-1)
    const [highestConsumption, setHighestConsumption] = useState(-1)

    const onInformationSelect = ()=>{
        yearArea.current.hidden = false
        defaultSelectValue.current.disabled = true
        setLowestConsumption(-1)
        setHighestConsumption(-1)
        setCheapStatesData(-1)
        setExpStatesData(-1)
    }
    const onYearInput = ()=>{
        checkBoxDiv.current.hidden = false
        fetchButton.current.hidden = true
        onDataRankingSelect() // added to double check if the user changes the info type
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
        if (selectedInfo.current.value == "Industry & Commercial Consumption" || selectedInfo.current.value == "All"){
            let url = electricityApiData["Industry & Commercial Consumption"].apiUrl + yearFilter
            axios.get(url).then(res => {
                if (cheapStates.current.checked){
                    setLowestConsumption(getLowest_returnAmount(res.data.response.data, "direct-use", 5))
                }else{
                    setLowestConsumption(-1)
                }
                if (expStates.current.checked){
                    setHighestConsumption(getHighest_returnAmount(res.data.response.data, "direct-use", 5))
                }else{
                    setHighestConsumption(-1)
                }
            }).catch(err => console.log(err))
        } else {
            setLowestConsumption(-1)
            setHighestConsumption(-1)
        }

        if (selectedInfo.current.value == "Retail prices" || selectedInfo.current.value == "All"){
            let url = electricityApiData["Retail prices"].apiUrl + yearFilter
            axios.get(url).then(res => {
                if (cheapStates.current.checked){
                    setCheapStatesData(getLowest_returnAmount(res.data.response.data, "average-retail-price", 5))
                }else{
                    setCheapStatesData(-1)
                }
                if (expStates.current.checked){
                    setExpStatesData(getHighest_returnAmount(res.data.response.data, "average-retail-price", 5))
                }else{
                    setExpStatesData(-1)
                }
            }).catch(err => console.log(err))
        }else {
            setCheapStatesData(-1)
            setExpStatesData(-1)
        }
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
                        <label htmlFor="top5_expensive" className="ml-2">Top 5 states</label>
                    </li>
                    <li>
                        <input ref={cheapStates} type="checkbox" id="top5_cheap" />
                        <label htmlFor="top5_cheap" className="ml-2">Lowest 5 States</label>
                    </li>
                </ul>
            </div>
            <p>
                <button hidden className="ml-2" ref={fetchButton} onClick={fetch}>Fetch</button><br />
                <label ref={msgLabel} hidden></label>
            </p>
        </div>
        <ChartComp title="5 Most Expensive States" data={expStatesData} chartType="bar" id="1" label="stateDescription" value="average-retail-price" />
        <ChartComp title="5 Cheapest States" data={cheapStatesData} chartType="bar" id="2" label="stateDescription" value="average-retail-price" />
        <ChartComp title="5 Highest States on Electricity Consumption" data={highestConsumption} chartType="bar" id="3" label="stateDescription" value="direct-use" />
        <ChartComp title="5 Lowest States on Electricity Consumption" data={lowestConsumption} chartType="bar" id="4" label="stateDescription" value="direct-use" />
    </div>);
}

export default Electricity