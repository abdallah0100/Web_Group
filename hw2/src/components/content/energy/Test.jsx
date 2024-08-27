import { useEffect } from "react"
import axios from "axios"

function Test(){
    useEffect(()=>{
        let url = "https://api.eia.gov/v2/natural-gas/cons/heat/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=annual&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000"
        let lrl = "https://api.eia.gov/v2/natural-gas/sum/lsum/data/?api_key=0elCt43O9HAYcRzX9wMXx5euPbU4PBOtw21LgY22&frequency=monthly&data[0]=value&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=200&start=2022-01&end=2022-12"
        axios.get(url).then(res => console.log(res))
    }, [])
    return(<></>)
}
export default Test