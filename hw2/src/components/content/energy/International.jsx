import axios from "axios"
import { useEffect, useState } from "react"
import DataTable from "./DataTable"
function International(){
    const apiUrl = "https://api.eia.gov/v2/international/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=monthly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"
    const [countryData, setCountryData] = useState(-1)
    const [originalCountryData, setOgCountryData] = useState(-1)
    useEffect(()=>{
        axios.get(apiUrl).then(res=> {
            setOgCountryData(res.data.response.data)
            setCountryData(res.data.response.data)
        }).catch(err => console.log(err))
    }, [])
    
    const onFilterInput = (event)=>{
        const searchQuery = event.target.value.toLowerCase();
        const filteredData = originalCountryData.filter((item)=> item.countryRegionName.toLowerCase().includes(searchQuery))
        setCountryData(filteredData)
    }

    return(<div>
        <center>
            <label htmlFor="country_filter">Filter by Country Name:</label>
            <input onChange={onFilterInput} id="country_filter" placeholder="Country name" type="text" className="ml-2 bg-blue-500 mt-1 pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"/>
        </center>
        <DataTable data={countryData} />
    </div>)
}

export default International