import { useEffect, useState } from "react";
import axios from "axios";
import { getProcessTypeEncounters } from "../../../utils/NaturalGasUtils";
import { getHighest_returnAmount } from "../../../utils/DataUtils";
import ChartComp from "./ChartComp";

// NaturalGas component to display natural gas data
function NaturalGas({ title, description }) {
    const [processTypes, setProcessTypes] = useState(-1);

    // Effect to fetch natural gas processing data on component mount
    useEffect(() => {
        let url = "https://api.eia.gov/v2/natural-gas/sum/lsum/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=monthly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=200&start=2022-01&end=2022-12";
        axios.get(url)
            .then(res => setProcessTypes(getProcessTypeEncounters(res.data.response.data)))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {/* Title and description section */}
            <div className="pt-6 rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white">
                <h1 className="dark:text-white text-xl font-semibold mb-2">{title}</h1>
                <p>{description}</p>
            </div>

            {/* Chart section */}
            <div className="pt-5 p-6">
                <center><img src="./loading.gif" width={100} height={100} hidden={processTypes !== -1} /></center>
                <ChartComp 
                    title="U.S Natural Gas Processing Categories" 
                    data={processTypes} 
                    chartType="pie" 
                    id="1" 
                    label="process-name" 
                    value="occurrence" 
                />
            </div>
        </div>
    );
}

export default NaturalGas;
