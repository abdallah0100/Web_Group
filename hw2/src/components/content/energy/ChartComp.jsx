import { useEffect, useRef, useState } from "react"

function ChartComp({title, data, chartType, id, label, value}){
    const ctx = useRef()
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(()=>{
        if (data == -1){
            if (chartInstance)
                chartInstance.destroy()
            return
        }
        let labels = data.map(item => item[label])
        let mappedData = data.map(item => item[value])
        let data2 = {
            labels: labels,//[data[0][label], data[1][label], data[2][label], data[3][label], data[4][label]],
            datasets: [{
                label: title,
                data: mappedData,//[data[0][value], data[1][value], data[2][value], data[3][value], data[4][value]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        }
        let chartSettings = {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
        if (chartInstance)
            chartInstance.destroy()

        let chart = new Chart(ctx.current.getContext('2d'), {
            type: chartType,
            data: data2,
            options: chartSettings
        })
        setChartInstance(chart)

    }, [data])
    return(<div hidden={data == -1}>
        <canvas ref={ctx} id={"chart"+id}></canvas>
    </div>)
}

export default ChartComp