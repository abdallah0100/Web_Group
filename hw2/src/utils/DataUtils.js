export function getCheapest5(data){
    const sortedData = data.sort((element1, element2) => element1['average-retail-price'] - element2['average-retail-price'])
    return sortedData.slice(0,5)
}

export function get5MostExp(data){
    const sortedData = data.sort((element1, element2) => element2['average-retail-price'] - element1['average-retail-price'])
    return sortedData.slice(0,5)
}

export const infoData = {
    'Retail prices': {
        apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/summary/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=average-retail-price&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
        desc: ""
    },
    'Industry & Commercial Consumption': {
        apiUrl: "https://api.eia.gov/v2/electricity/state-electricity-profiles/source-disposition/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=direct-use&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000",
        desc: "Industry & Commercial Electricity Consumption"
    }
}
