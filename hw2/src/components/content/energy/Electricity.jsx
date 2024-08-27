import { useRef, useState } from "react";
import axios from "axios";
import { getLowest_returnAmount, electricityApiData, getHighest_returnAmount } from "../../../utils/DataUtils";
import ChartComp from "./ChartComp";

// Electricity component
function Electricity() {
    // References to various DOM elements
    const yearArea = useRef();
    const fetchButton = useRef();
    const defaultSelectValue = useRef();
    const selectedInfo = useRef();
    const checkBoxDiv = useRef();
    const cheapStates = useRef();
    const expStates = useRef();
    const msgLabel = useRef();
    const year = useRef();

    // State variables to manage data and loading state
    const [cheapStatesData, setCheapStatesData] = useState(-1);
    const [expStatesData, setExpStatesData] = useState(-1);
    const [lowestConsumption, setLowestConsumption] = useState(-1);
    const [highestConsumption, setHighestConsumption] = useState(-1);
    const [loading, updateLoading] = useState(true);

    // Function called when information type is selected
    const onInformationSelect = () => {
        yearArea.current.hidden = false;
        defaultSelectValue.current.disabled = true;
        setLowestConsumption(-1);
        setHighestConsumption(-1);
        setCheapStatesData(-1);
        setExpStatesData(-1);
    };

    // Function called when the year is inputted
    const onYearInput = () => {
        checkBoxDiv.current.hidden = false;
        fetchButton.current.hidden = true;
        onDataRankingSelect(); // double-check if the user changes the info type
    };

    // Function called when data ranking options are selected
    const onDataRankingSelect = () => {
        fetchButton.current.hidden = !(cheapStates.current.checked || expStates.current.checked);
    };

    // Function to fetch data from the API
    const fetch = () => {
        // Validate the year input
        if (year.current.value > 2023 || year.current.value < 2011) {
            msgLabel.current.textContent = "Invalid year input, please input 2011-2023";
            msgLabel.current.hidden = false;
            return;
        }
        updateLoading(false);
        msgLabel.current.hidden = true;
        let yearFilter = "&start=" + year.current.value + "&end=" + year.current.value;

        // Fetch data for Industry & Commercial Consumption
        if (selectedInfo.current.value === "Industry & Commercial Consumption" || selectedInfo.current.value === "All") {
            let url = electricityApiData["Industry & Commercial Consumption"].apiUrl + yearFilter;
            axios.get(url).then(res => {
                if (cheapStates.current.checked) {
                    setLowestConsumption(getLowest_returnAmount(res.data.response.data, "direct-use", 5));
                } else {
                    setLowestConsumption(-1);
                }
                if (expStates.current.checked) {
                    setHighestConsumption(getHighest_returnAmount(res.data.response.data, "direct-use", 5));
                } else {
                    setHighestConsumption(-1);
                }
            }).catch(err => console.log(err));
        } else {
            setLowestConsumption(-1);
            setHighestConsumption(-1);
        }

        // Fetch data for Retail prices
        if (selectedInfo.current.value === "Retail prices" || selectedInfo.current.value === "All") {
            let url = electricityApiData["Retail prices"].apiUrl + yearFilter;
            axios.get(url).then(res => {
                if (cheapStates.current.checked) {
                    setCheapStatesData(getLowest_returnAmount(res.data.response.data, "average-retail-price", 5));
                } else {
                    setCheapStatesData(-1);
                }
                if (expStates.current.checked) {
                    setExpStatesData(getHighest_returnAmount(res.data.response.data, "average-retail-price", 5));
                } else {
                    setExpStatesData(-1);
                }
            }).catch(err => console.log(err));
        } else {
            setCheapStatesData(-1);
            setExpStatesData(-1);
        }
        updateLoading(true);
    };

    return (
        <div>
            {/* Title and Description Section */}
            <div className="rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white mb-8">
                <h1 className="text-3xl font-bold text-center mb-4">Electricity Consumption</h1>
                <p className="text-lg text-center">
                    Explore detailed insights into electricity consumption by selecting the specific data you want to view. Customize your analysis with tailored information on usage patterns, pricing, and more to make informed energy decisions.
                </p>
            </div>

            {/* Form Section */}
            <div className="pt-6 rounded-lg shadow-lg text-black p-6 dark:bg-[#003C43] dark:text-white mb-8">
                <div className="mb-4">
                    <label className="text-lg font-semibold">Select The information you would like to show</label>
                    <select
                        ref={selectedInfo}
                        onChange={onInformationSelect}
                        className="ml-2 mt-1 bg-blue-600 py-2 px-4 border border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 rounded-lg"
                    >
                        <option ref={defaultSelectValue} defaultValue>Select an option</option>
                        <option>All</option>
                        <option>Retail prices</option>
                        <option>Industry & Commercial Consumption</option>
                    </select>
                </div>

                {/* Year Input Section */}
                <div className="mb-4" ref={yearArea} hidden>
                    <label htmlFor="yearInput" className="text-lg font-semibold">Enter Year:</label>
                    <input
                        ref={year}
                        onChange={onYearInput}
                        type="number"
                        id="yearInput"
                        className="ml-2 mt-1 bg-blue-600 py-2 px-4 border border-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500 rounded-lg"
                    />
                </div>

                {/* Data Ranking Selection Section */}
                <div hidden ref={checkBoxDiv} className="mb-4">
                    <ul onChange={onDataRankingSelect}>
                        <li className="flex items-center mb-2">
                            <input
                                ref={expStates}
                                type="checkbox"
                                id="top5_expensive"
                                className="mr-2 h-5 w-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="top5_expensive" className="text-lg font-semibold">Top 5 States</label>
                        </li>
                        <li className="flex items-center">
                            <input
                                ref={cheapStates}
                                type="checkbox"
                                id="top5_cheap"
                                className="mr-2 h-5 w-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring focus:ring-blue-300"
                            />
                            <label htmlFor="top5_cheap" className="text-lg font-semibold">Lowest 5 States</label>
                        </li>
                    </ul>
                </div>

                {/* Fetch Button */}
                <div className="flex items-center">
                    <button
                        hidden
                        ref={fetchButton}
                        onClick={fetch}
                        className="ml-2 mt-4 bg-blue-600 text-white py-2 px-4 border border-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Fetch
                    </button>
                </div>

                <label ref={msgLabel} hidden className="text-red-500 text-lg font-semibold mt-2"></label>
            </div>

            {/* Loading and Charts Section */}
            <center><img src="./loading.gif" width={100} height={100} hidden={loading} alt="Loading" /></center>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChartComp 
                    title="5 Most Expensive States" 
                    data={expStatesData} 
                    chartType="bar" 
                    id="1" 
                    label="stateDescription" 
                    value="average-retail-price" 
                    darkMode={true} // Pass the dark mode prop to the chart component
                />
                <ChartComp 
                    title="5 Cheapest States" 
                    data={cheapStatesData} 
                    chartType="bar" 
                    id="2" 
                    label="stateDescription" 
                    value="average-retail-price" 
                    darkMode={true} // Pass the dark mode prop to the chart component
                />
                <ChartComp 
                    title="5 Highest States on Electricity Consumption" 
                    data={highestConsumption} 
                    chartType="bar" 
                    id="3" 
                    label="stateDescription" 
                    value="direct-use" 
                    darkMode={true} // Pass the dark mode prop to the chart component
                />
                <ChartComp 
                    title="5 Lowest States on Electricity Consumption" 
                    data={lowestConsumption} 
                    chartType="bar" 
                    id="4" 
                    label="stateDescription" 
                    value="direct-use" 
                    darkMode={true} // Pass the dark mode prop to the chart component
                />
            </div>
        </div>
    );
}

export default Electricity;
