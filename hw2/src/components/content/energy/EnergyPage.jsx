import { energyData } from "../../../utils/DataUtils"
import { useState, useEffect, useRef } from "react"
import { getLowest_returnAmount, getHighest_returnAmount } from "../../../utils/DataUtils"
import { toggleStorage, elementInStorage } from "./EnergyPageUtils"
import axios from "axios"
import ChartComp from "./ChartComp"

// EnergyPage component
function EnergyPage({ energyType, OtherComponent }) {
    // Refs for various DOM elements
    const yearArea = useRef();
    const startYear = useRef();
    const endYear = useRef();
    const defaultSelectValue = useRef();
    const selectedInfo = useRef();
    const checkBoxDiv = useRef();
    const top5 = useRef();
    const lowest5 = useRef();
    const showDataBtn = useRef();
    const msgLabel = useRef();

    // State to manage loading status
    const [loading, updateLoading] = useState(false);

    const [data, setData] = useState(null)
    useEffect(()=>{
        setData(energyData[energyType])
    }, [energyType])

    // State to hold fetched data
    const [fetchedData, updateFetchedData] = useState([]);

    // Effect to initialize data based on energyType and manage favourites
    useEffect(() => {
        setData(energyData[energyType]);
    }, [energyType]);

    // Show year input section when info is selected
    const onInfoSelect = () => {
        yearArea.current.hidden = false;
        defaultSelectValue.current.disabled = true;
    };

    const favouriteClick = (event, element)=>{
        toggleStorage(element)
        if (elementInStorage(element))
            event.target.src = "./yellow_star.png"
        else
            event.target.src = "./white_star.png"
    }

    const onYearInput = () => {
        checkBoxDiv.current.hidden = false;
    };

    // Show the button to fetch data when a ranking option is selected
    const onDataRankingSelect = () => {
        showDataBtn.current.hidden = !(top5.current.checked || lowest5.current.checked);
    };

    // Fetch data based on user input and selections
    const fetchData = async () => {
        // Validate year inputs
        if (startYear.current.value > 2024 || endYear.current.value > 2024 || startYear.current.value >= endYear.current.value 
            || startYear.current.value < 2010 || endYear.current.value < 2010) {
            msgLabel.current.textContent = "Invalid year input, please input different years from 2010-2024";
            msgLabel.current.hidden = false;
            return;
        }
    
        updateLoading(true);
        msgLabel.current.hidden = true;
        let tempData;
        if (selectedInfo.current.value !== "All") {
            tempData = energyData[energyType].info.filter(item => item.name === selectedInfo.current.value);
        } else {
            tempData = energyData[energyType].info;
        }
    
        updateFetchedData([]); // Clear previous data
    
        let yearFilter = "&start=" + startYear.current.value + "&end=" + endYear.current.value;
    
        // Fetch data for each selected information type
        const promises = tempData.map(async (element) => {
            const res = await axios.get(element.apiUrl + yearFilter);
            const newData = [];
            if (lowest5.current.checked) {
                newData.push({
                    data: getLowest_returnAmount(res.data.response.data, element.valueName, 5),
                    chartTitle: element.lowestChartTitle,
                    label: element.label,
                    valueName: element.valueName
                });
            }
    
            if (top5.current.checked) {
                newData.push({
                    data: getHighest_returnAmount(res.data.response.data, element.valueName, 5),
                    chartTitle: element.highestChartTitle,
                    label: element.label,
                    valueName: element.valueName
                });
            }
    
            return newData;
        });
    
        // Wait for all data fetching to complete
        const results = await Promise.all(promises);
    
        // Flatten the results array and update the state
        updateFetchedData(results.flat());
        updateLoading(false);
    };
    
    return (
        <>
            <div hidden={!data}>
                {/* Title and Description Section */}
                <div className="rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white mb-8">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        {data?.title || ""}
                    </h1>
                    <p className="text-lg text-center">
                        {data?.description || ""}
                    </p>
                </div>
                {OtherComponent && <OtherComponent />}
                
                {/* Form Section */}
                <div className="pt-6 rounded-lg shadow-lg text-black p-6 dark:bg-[#003C43] dark:text-white mb-8">
                    <div className="mb-4">
                        <label className="text-lg font-semibold">
                            Select The information you would like to show
                        </label>
                        <select
                            ref={selectedInfo}
                            onChange={onInfoSelect}
                            className="ml-2 mt-1 bg-blue-600 py-2 px-4 border border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 rounded-lg"
                        >
                            <option key="def" ref={defaultSelectValue} defaultValue>
                                Select an option
                            </option>
                            <option key="all">All</option>
                            {data?.info.map((item, index) => (
                                <option key={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Year Input Section */}
                    <div className="mb-4" ref={yearArea} hidden>
                        <label htmlFor="yearInput" className="text-lg font-semibold">
                            From:
                        </label>
                        <input
                            ref={startYear}
                            onChange={onYearInput}
                            type="number"
                            id="yearInput"
                            placeholder="Year: 2024"
                            className="ml-2 mt-1 bg-blue-600 py-2 px-4 border border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 rounded-lg"
                        />
                        <label>To:</label>
                        <input
                            ref={endYear}
                            onChange={onYearInput}
                            type="number"
                            placeholder="Year: 2025"
                            className="ml-2 mt-1 bg-blue-600 py-2 px-4 border border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 rounded-lg"
                        />
                    </div>

                    {/* Data Ranking Selection Section */}
                    <div className="mb-4" ref={checkBoxDiv} hidden>
                        <ul onChange={onDataRankingSelect}>
                            <li className="flex items-center mb-2">
                                <input
                                    ref={top5}
                                    type="checkbox"
                                    id="top5_expensive"
                                    className="mr-2 h-5 w-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring focus:ring-blue-300"
                                />
                                <label htmlFor="top5_expensive" className="text-lg font-semibold">
                                    Filter by Top 5
                                </label>
                            </li>
                            <li className="flex items-center">
                                <input
                                    ref={lowest5}
                                    type="checkbox"
                                    id="top5_cheap"
                                    className="mr-2 h-5 w-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring focus:ring-blue-300"
                                />
                                <label htmlFor="top5_cheap" className="text-lg font-semibold">
                                    Filter by Lowest 5
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Fetch Button */}
                    <div className="flex items-center">
                        <button
                            hidden
                            ref={showDataBtn}
                            onClick={fetchData}
                            className="ml-2 mt-4 bg-blue-600 text-white py-2 px-4 border border-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Show Data
                        </button>
                    </div>
                    <label ref={msgLabel} hidden className="text-red-500 text-lg font-semibold mt-2"></label>
                </div>

                {/* Loading Indicator */}
                <center>
                    <img src="./loading.gif" width={100} height={100} hidden={!loading} alt="Loading" />
                </center>

                {/* Charts Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" hidden={loading}>
                    {fetchedData.map((element, index) => 
                    <div className="relative block" key={index}>
                        <img onClick={(event)=> favouriteClick(event, element)} alt="Toggle Favourite" width={30} height={30} src={elementInStorage(element) ? "yellow_star.png" : "white_star.png"}
                            className="absolute top-13 right-2 cursor-pointer"
                            title="Toggle Favourite" />
                        <ChartComp 
                            key={index}
                            title={element.chartTitle}
                            data={element.data}
                            chartType="bar"
                            label={element.label}
                            value={element.valueName}
                            id={index}
                        />
                    </div> 
                    )}
                       
                </div>
            </div>

            {/* Fallback Loading Indicator */}
            <center>
                <img src="./loading.gif" width={100} height={100} hidden={data ? true : false} alt="Loading" />
            </center>
        </>
    );
}

export default EnergyPage;
