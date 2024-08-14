import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

// Register necessary components
Chart.register(...registerables);

function ChartComp({ title, data, chartType, id, label, value }) {
  const ctx = useRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (data == -1) {
      if (chartInstance) chartInstance.destroy();
      return;
    }

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
          type: 'linear',  // This is likely where the issue was
        }
      },
      maintainAspectRatio: false
    };

    if (chartInstance) chartInstance.destroy();

    let chart = new Chart(ctx.current.getContext('2d'), {
      type: chartType,
      data: data2,
      options: chartSettings
    });

    setChartInstance(chart);
  }, [data]);

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-lg h-96">
        <canvas ref={ctx} id={"chart" + id} className="mx-auto"></canvas>
      </div>
    </div>
  );
}

export default ChartComp;
