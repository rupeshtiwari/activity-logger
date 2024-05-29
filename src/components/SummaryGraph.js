import React, { useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import './SummaryGraph.css';

// Registering necessary components from Chart.js
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const SummaryGraph = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              data: data.values,
              backgroundColor: [
                '#4caf50', // Green
                '#ffeb3b', // Yellow
                '#f44336', // Red
                '#2196f3', // Blue
                '#ff9800', // Orange
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>
          <FontAwesomeIcon icon={faChartBar} className='mr-2' />
          Portfolio Stats
        </Card.Title>
        <div style={{ height: '300px' }}>
          <canvas ref={canvasRef}></canvas>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SummaryGraph;
