import React, { useEffect, useState } from 'react';

// DataTable component for displaying paginated data
function DataTable({ data, index, setIndex, loading }) {
    // State to store the portion of data that should be displayed
    const [dataToDisplay, setDataToDisplay] = useState([]);

    // Effect to update the displayed data when index or data changes
    useEffect(() => {
        // Ensure data is an array and slice the relevant portion for the current page
        if (Array.isArray(data))
            setDataToDisplay(data.slice(index * 10, 10 * (index + 2)));
    }, [index, data]);  // Dependency array triggers the effect when index or data changes

    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
                {/* Display table only if there is data to show */}
                {dataToDisplay.length > 0 ? 
                    <div>
                        <table className="min-w-full bg-white dark:bg-gray-800">
                            <thead>
                                <tr>
                                    {/* Define table headers */}
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Country Name</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Activity</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Period</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Product Name</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Value</th>
                                    <th className="py-2 px-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-left">Unit Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Render each row of data */}
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

                        {/* Pagination controls */}
                        <div className="flex justify-between items-center mt-4">
                            <button 
                                className="py-2 px-4 bg-green-500 text-white rounded disabled:opacity-50"
                                disabled={index === 0}  // Disable "Previous" button if on the first page
                                onClick={() => setIndex(index - 1)}  // Decrement page index
                            >
                                Previous
                            </button>

                            {/* Display the current page number and total pages */}
                            <span className="dark:text-green-600 border-2 border-green-600 py-2 px-4 rounded">
                                Page {index + 1} of {Math.ceil(data.length / 10)}
                            </span>

                            <button 
                                className="py-2 px-4 bg-green-500 text-white rounded disabled:opacity-50"
                                disabled={index + 1 === Math.ceil(data.length / 10)}  // Disable "Next" button if on the last page
                                onClick={() => setIndex(index + 1)}  // Increment page index
                            >
                                Next
                            </button>
                        </div>
                    </div> 
                    : <center>
                        {/* Show a message if no data is available */}
                        <label hidden={!loading}>Data was not found!</label>
                      </center>}
            </div>
        </div>
    );
}

export default DataTable;
