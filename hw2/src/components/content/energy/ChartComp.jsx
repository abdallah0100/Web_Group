import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

// Register necessary components for Chart.js
Chart.register(...registerables);

// ChartComp component for rendering charts
function ChartComp({ title, data, chartType, id, label, value }) {
  const ctx = useRef();  // Reference to the canvas element
  const [chartInstance, setChartInstance] = useState(null);  // State to manage the chart instance


  // Effect to create or update the chart whenever data changes
  useEffect(() => {
    if (!data) {
      if (chartInstance) chartInstance.destroy();  // Destroy the chart if data is invalid
      return;
    }

    console.log("[chartComp] - id: " + id + " title: " + title)

    let labels = data.map(item => item[label]);
    let mappedData = data.map(item => item[value]);

    let data2 = {
      labels: labels,
      datasets: [{
        label: title,
        data: mappedData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    let chartSettings = {
      scales: {
        y: {
          beginAtZero: true,
          type: 'linear',  // Ensure the y-axis starts at zero
        }
      },
      maintainAspectRatio: false  // Allow the chart to be responsive
    };

    if (chartInstance) chartInstance.destroy();  // Destroy the previous chart instance

    // Create a new chart instance
    let chart = new Chart(ctx.current.getContext('2d'), {
      type: chartType,
      data: data2,
      options: chartSettings
    });

    setChartInstance(chart);  // Update the chart instance state

    return () => {
      chart.destroy();  // Cleanup on unmount
    };
  }, [data]);

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-lg h-96">
        <canvas ref={ctx} id={"chart" + id} className="mx-auto"></canvas>  {/* Canvas element for the chart */}
      </div>
    </div>
  );
}

export default ChartComp;
