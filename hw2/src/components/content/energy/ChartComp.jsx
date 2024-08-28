import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all necessary components for Chart.js
Chart.register(...registerables);

// ChartComp component for rendering charts
function ChartComp({ title, data, chartType, id, label, value }) {
  // Reference to the canvas element
  const ctx = useRef();  
  // State to manage the chart instance
  const [chartInstance, setChartInstance] = useState(null);  

  // Effect to create or update the chart whenever data changes
  useEffect(() => {
    // If there's no valid data, destroy the existing chart (if any) and exit early
    if (!data) {
      if (chartInstance) chartInstance.destroy();  
      return;
    }

    // Map data to chart labels and data points
    let labels = data.map(item => item[label]);
    let mappedData = data.map(item => item[value]);

    // Chart data structure
    let data2 = {
      labels: labels,
      datasets: [{
        label: title,  // Chart title
        data: mappedData,  // Data values for the chart
        backgroundColor: [  // Background colors for the data points
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [  // Border colors for the data points
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1  // Border width for the data points
      }]
    };

    // Chart settings
    let chartSettings = {
      scales: {
        y: {
          beginAtZero: true,  // Ensure the y-axis starts at zero
          type: 'linear',  
        }
      },
      maintainAspectRatio: false  // Allow the chart to be responsive
    };

    // Destroy the previous chart instance to avoid memory leaks or duplicates
    if (chartInstance) chartInstance.destroy();  

    // Create a new chart instance
    let chart = new Chart(ctx.current.getContext('2d'), {
      type: chartType,  // Type of chart (e.g., 'bar', 'line')
      data: data2,  // Data for the chart
      options: chartSettings  // Settings for the chart
    });

    // Update the chart instance state
    setChartInstance(chart);  

    // Cleanup function to destroy the chart on component unmount
    return () => {
      chart.destroy();  
    };
  }, [data]);  // Dependency array ensures effect runs when 'data' changes

  // Render the chart inside a responsive container
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-lg h-96">
        {/* Canvas element for the chart */}
        <canvas ref={ctx} id={"chart" + id} className="mx-auto"></canvas>  
      </div>
    </div>
  );
}

export default ChartComp;
