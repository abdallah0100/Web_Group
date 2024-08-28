import { useEffect, useState } from "react"
import ChartComp from "./energy/ChartComp"
import { toggleStorage } from "./energy/EnergyPageUtils"

function Favourites(){
    const [storage, setStorage] = useState([])
    useEffect(()=>{
        if (localStorage.getItem("favourites")){
            let temp = localStorage.getItem("favourites")
            setStorage(JSON.parse(temp))
        }
    }, [])

    const removeChart = (element) => {
        toggleStorage(element)
        if (localStorage.getItem("favourites")){
            let temp = localStorage.getItem("favourites")
            setStorage(JSON.parse(temp))
        }
    }

    return(<div>
            {/* Title and Description Section */}
            <div className="rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white mb-8">
                <h1 className="text-3xl font-bold text-center mb-4">Favourite & Saved Charts</h1>
                <p className="text-lg text-center">
                View and manage all the charts you’ve marked as favorites.<br /> Simply click the star icon 
                (<span className="inline-flex items-center"><img width={20} height={20} src="./white_star.png" alt="Star Icon" />
                    </span>) above any chart to save it here,
                 or click the red icon here (<span className="inline-flex items-center"><img width={20} height={20} src="./remove.png" alt="Star Icon" />
        </span>) to remove it.<br />
                 Easily access your top insights and keep track of the data that matters most to you.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    storage.map((item, index) => 
                        <div className="relative block" key={index}>
                            <img alt="remove" width={40} height={10} src="./remove.png"
                                onClick={()=>removeChart(item)}
                                className="absolute top-13 right-2 cursor-pointer"
                                title="Remove from favourite" />
                            <ChartComp 
                                key={index}
                                title={item.chartTitle}
                                data={item.data}
                                chartType="bar"
                                label={item.label}
                                value={item.valueName}
                                id={index}
                        />
                        </div>
                    )
                }
            </div>
    </div>)
}

export default Favourites