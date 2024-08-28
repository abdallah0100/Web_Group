// Function to get the lowest 'returnAmount' entries based on a specific value in the dataset
export function getLowest_returnAmount(data, value, returnAmount) {
    // Sort data in ascending order based on the specified value
    const sortedData = data.sort((element1, element2) => element1[value] - element2[value]);
    // Return the first 'returnAmount' number of entries
    return sortedData.slice(0, returnAmount);
}

// Function to get the highest 'returnAmount' entries based on a specific value in the dataset
export function getHighest_returnAmount(data, value, returnAmount) {
    // Sort data in descending order based on the specified value
    const sortedData = data.sort((element1, element2) => element2[value] - element1[value]);
    // Return the first 'returnAmount' number of entries
    return sortedData.slice(0, returnAmount);
}

// Object to store energy data information and settings
export const energyData = {
    'electricity': {
        // Array of information objects for electricity-related data
        info: [
            {
                name: 'Retail prices',  // Name of the data category
                valueName: "average-retail-price",  // Key to access value in the dataset
                apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/summary/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=average-retail-price&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",  // API URL to fetch the data
                lowestChartTitle: "5 Cheapest States",  // Title for the chart showing the lowest values
                highestChartTitle: "5 Most Expensive States",  // Title for the chart showing the highest values
                label: "stateDescription"  // Label to display in the chart
            },
            {
                name: 'Industry & Commercial Consumption',
                valueName: "direct-use",
                apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/source-disposition/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=direct-use&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
                lowestChartTitle: "5 Lowest States on Electricity Consumption",
                highestChartTitle: "5 Highest States on Electricity Consumption",
                label: "stateDescription"
            }
        ],
        title: "Electricity Consumption",  // Title for the electricity data section
        description: "Explore detailed insights into electricity consumption by selecting the specific data you want to view. Customize your analysis with tailored information on usage patterns, pricing, and more to make informed energy decisions."  // Description of the electricity section
    },
    "natural_gas": {
        // Array of information objects for natural gas-related data
        info: [
            {
                name: "Consumption by End Use",
                valueName: "value",
                apiUrl: "https://api.eia.gov/v2/natural-gas/cons/sum/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
                lowestChartTitle: "5 Lowest Categories in Natural Gas Consumption",
                highestChartTitle: "5 Highest Categories in Natural Gas Consumption",
                label: "process-name"
            },
            {
                name: "Heat Content of Natural Gas",
                valueName: "value",
                apiUrl: "https://api.eia.gov/v2/natural-gas/cons/heat/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
                lowestChartTitle: "5 Lowest Heat Contents",
                highestChartTitle: "5 Highest Heat Contents",
                label: "process-name"
            }
        ],
        title: "Natural Gas Consumption",  // Title for the natural gas data section
        description: "Navigate through different statistics over Natural Gas consumption, extracting and more!"  // Description of the natural gas section
    }
};
