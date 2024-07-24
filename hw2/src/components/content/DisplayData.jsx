////////new 
import React, { useState } from 'react';

function DisplayData() {
    const [showChart, setShowChart] = useState(false);

    const showData = () => {
        // Example function to toggle chart visibility
        setShowChart(!showChart);
        console.log('showed');
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
                            <select id="area" className="bg-blue-500 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>USA</option>
                                <option>IL</option>
                                <option>BR</option>
                                <option>EG</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="energy" className="block text-sm font-medium text-gray-700">Energy type</label>
                            <select id="energy" className="bg-blue-500 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>Electric power consumption</option>
                                <option>Energy consumption</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="chart_type" className="block text-sm font-medium text-gray-700">Chart type</label>
                            <select id="chart_type" className="bg-blue-500 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>pie</option>
                                <option>bar</option>
                                <option>line</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={showData} className="bg-blue-500 text-white py-2 px-8 rounded hover:bg-blue-700">Show</button>
                        </div>
                    </div>
                    <div id="chartArea" className={`bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 ${showChart ? '' : 'hidden'}`}>
                        <div className="relative" style={{ height: '400px' }}>
                            <label id="description">Chart Area</label>
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayData;

