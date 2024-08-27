import React, { useState, useRef } from 'react';
import axios from 'axios';
function DisplayData() {
    const [showChart, setShowChart] = useState(false);
    const [chartInstance, setChartInstance] = useState(null);

    //JSON object where the key is the value found in the select drop down of energies, has the indicator and the description of the data
    const energyIndicators = {'Electric power consumption': {'indicator': 'EG.USE.ELEC.KH.PC', 'description': 'Electric power consumption per person, measured in kilowatt-hours'},
    'Energy consumption' : {'indicator': 'EG.USE.PCAP.KG.OE', 'description': 'Energy use per person in kilograms of oil equivalent (kgoe)'}
    };
    const area = useRef();
    const energyType = useRef();
    const chartType = useRef();
    const ctx = useRef();
    const data_desc = useRef();

    const showData = () => {
        let indicator = energyIndicators[energyType.current.value].indicator;
        const apiUrl = `https://api.worldbank.org/v2/country/${area.current.value}/indicator/${indicator}?format=json`;
    
        //fetching data from the api
        axios.get(apiUrl).then(result => {
        
            let data2 = {
                labels: [result.data[1][9]['date'], result.data[1][10]['date'], result.data[1][11]['date'], result.data[1][12]['date']],
                datasets: [{
                    label: energy.value,
                    data: [result.data[1][9]['value'], result.data[1][10]['value'], result.data[1][11]['value'], result.data[1][12]['value']],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            };
            let chartSettings = {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            };
            if (chartInstance)
                chartInstance.destroy();

            let chart = new Chart(ctx.current.getContext('2d'), {
                type: chartType.current.value,
                data: data2,
                options: chartSettings
            });
            setChartInstance(chart)
            data_desc.current.textContent = energyIndicators[energyType.current.value].description;
            setShowChart(true);
        }).catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#003C43] to-[#77B0AA] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-white bg-opacity-75 relative z-10 dark:bg-gray-800 dark:bg-opacity-75">
                <div className="flex flex-col md:flex-row items-start mt-10 ml-10 space-y-6 md:space-y-0 md:space-x-10">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <div className="mb-4">
                            <label htmlFor="area" className="text-sm font-medium text-gray-700">Area</label>
                            <select ref={area} id='area' className="bg-blue-500 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>USA</option>
                                <option>IL</option>
                                <option>BR</option>
                                <option>EG</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="energy" className="block text-sm font-medium text-gray-700">Energy type</label>
                            <select ref={energyType} id="energy" className="bg-blue-500 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>Electric power consumption</option>
                                <option>Energy consumption</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="chart_type" className="block text-sm font-medium text-gray-700">Chart type</label>
                            <select ref={chartType} id="chart_type" className="bg-blue-500 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>pie</option>
                                <option>bar</option>
                                <option>line</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={showData} className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-700">Show</button>
                        </div>
                    </div>
                    <div id="chartArea" hidden={!showChart} className={`bg-white p-6 rounded-lg shadow-lg `}>
                        <div className="relative" style={{ height: '400px', width: '500px' }}>
                            <label ref={data_desc} className='text-black'>Chart Area</label>
                            <canvas ref={ctx} id="myChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayData;

