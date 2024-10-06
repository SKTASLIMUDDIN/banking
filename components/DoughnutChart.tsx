'use client'
import{Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {

  const accountsNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance);

  const data = {
    datasets: [{
      lable: 'Banks',
      data: balances,
      backgroundColor:['#0747b6', '#2265d8', '#2f91fa' ]
    }],
    labels: accountsNames
  }
  return <Doughnut 
  data={data}
  options={{
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    } 
  }}
  />
}

export default DoughnutChart