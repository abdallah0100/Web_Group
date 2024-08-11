import React, { useEffect, useState } from 'react';

function DataTable({data}) {

    const[index, setIndex] = useState(0)
    const[dataToDisplay, setDataToDisplay] = useState([]);

    useEffect(()=>{
        if (Array.isArray(data))
            setDataToDisplay(data.slice(index*10, 10*(index + 1)))
    }, [index, data])
    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                {dataToDisplay.length > 0 ? <div><table className="min-w-full bg-white dark:bg-gray-800">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Country Name</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Activity</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Period</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Product Name</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Value</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Unit Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToDisplay.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{item.countryRegionName}</td>
                                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{item.activityName}</td>
                                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{item.period}</td>
                                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{item.productName}</td>
                                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{item.value}</td>
                                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{item.unitName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-4">
                <button 
                    className="py-2 px-4 bg-green-500 text-white rounded disabled:opacity-50"
                    disabled={index == 0}
                    onClick={()=> setIndex(index-1)}
                >
                    Previous
                </button>

                <span className="dark:text-green-600 border-2 border-green-600 py-2 px-4 rounded">
                    Page {index + 1} of {Math.ceil(data.length/10)}
                </span>

                <button 
                    className="py-2 px-4 bg-green-500 text-white rounded disabled:opacity-50"
                    disabled={index+1 == Math.ceil(data.length/10)}
                    onClick={()=> setIndex(index+1)}
                >
                    Next
                </button>
            </div>
                 </div> : <center>
                        <label>Data was not found!</label>
                            </center>}
            </div>
        </div>
    );
}

export default DataTable;
