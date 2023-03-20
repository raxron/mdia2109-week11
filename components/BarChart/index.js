import { useState, useEffect } from "react";
import styles from '@/components/BarChart/BarChart.module.css'

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {
    const [chartData, setChartData] = useState(
        {
            datasets: []
        }
    )

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label:'Sales $',
                    data:[12354,12546,25468,12578,22354,33002,12345],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor:'rgba(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                  position: 'top'
                },
                title: {
                  display: true,
                  text: 'Daily Revenue',
                }
            },
            maintainAspectRatio: false,
            responsive:  true
        })


    }, [])

    return (
        <>
        <div className={styles.container}>
            <Bar data = {chartData} options={chartOptions}/>
        </div>
        </>
    )
}