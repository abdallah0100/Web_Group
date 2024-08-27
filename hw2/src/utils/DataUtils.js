export function getLowest_returnAmount(data, value, returnAmount){
    const sortedData = data.sort((element1, element2) => element1[value] - element2[value])
    return sortedData.slice(0,returnAmount)
}

export function getHighest_returnAmount(data, value, returnAmount){
    const sortedData = data.sort((element1, element2) => element2[value] - element1[value])
    return sortedData.slice(0,returnAmount)
}

export const electricityApiData = {
    'Retail prices': {
        apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/summary/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=average-retail-price&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
        desc: "Price retails"
    },
    'Industry & Commercial Consumption': {
        apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/source-disposition/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=direct-use&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
        desc: "Industry & Commercial Electricity Consumption"
    }
}

export const energyData = {
    'electricity': {
        info: [{
            name: 'Retail prices',
            valueName: "average-retail-price",
            apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/summary/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=average-retail-price&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
            lowestChartTitle: "5 Cheapest States",
            highestChartTitle: "5 Most Expensive States",
            label: "stateDescription"
        },
        {
            name: 'Industry & Commercial Consumption',
            valueName: "direct-use",
            apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/source-disposition/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=direct-use&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
            lowestChartTitle: "5 Lowest States on Electricity Consumption",
            highestChartTitle: "5 Highest States on Electricity Consumption",
            label: "stateDescription"
        }],
        title: "Electricity Consumption",
        description: "Explore detailed insights into electricity consumption by selecting the specific data you want to view. Customize your analysis with tailored information on usage patterns, pricing, and more to make informed energy decisions."
    },
    "natural_gas":{
        info: [{
            name: "subject1",
            apiUrl: "url"
        },
        {
            name: "subject2",
            apiUrl: "url"
        },
        {
            name: "subject3",
            apiUrl: "url"
        }],
        title: "Natural Gas Consumption",
        description: "Navigate through different statistics over Natural Gas consumption, extracting and more!"
    }
}
