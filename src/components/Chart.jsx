//  @ {} ! # $ % ^ & * () + | : " <> ? _ +
import React from 'react'
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2'
import './Chart.css'

ChartJS.register(ArcElement,Tooltip,Legend);

const Charts = () => {
    
    const data = {
                labels: ['SN', 'MN', 'Nu', 'MP', 'SP'],
                datasets: [{
                    label: 'My Pie Chart',
                    data: [3, 2, 3, 12, 19],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },],
        };

  return (
    <div className='pieChart'>
        <Pie data={data}/>
    </div>
  )
}

export default Charts