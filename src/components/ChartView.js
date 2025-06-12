// src/components/ChartView.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Rejestracja wymaganych modułów Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartView = ({ label, dataPoints }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: `Wykres: ${label}` }
    },
    scales: {
      x: {
        type: 'category',
        title: { display: true, text: 'Czas' }
      },
      y: {
        type: 'linear',
        title: { display: true, text: 'Wartość' }
      }
    }
  };

  const data = {
    labels: dataPoints.map(dp => dp.time),
    datasets: [
      {
        label,
        data: dataPoints.map(dp => dp.value),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
        tension: 0.1
      }
    ]
  };

  return <Line options={options} data={data} />;
};

export default ChartView;
