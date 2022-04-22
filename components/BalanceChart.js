import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import { useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

const BalanceChart = () => {
  const CoinGeckoClient = new CoinGecko()
  const [dataFetch, setDateFetch] = useState([])

  const data = {
    labels: [
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Noz',
      'Dec',
      'Jan',
    ],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#3773f5',
        borderColor: '#3773f5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#3773f5',
        pointBackgroundColor: '#3773f5',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#3773f5',
        pointHoverBorderColor: '#3773f5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataFetch,
      },
    ],
  }


  useEffect(() => {
    (async () => {
      let { data } = await CoinGeckoClient.coins.fetchMarketChart('bitcoin', {vs_currency: "usd"});
      console.log(data.prices.map(item => item[1]));
      setDateFetch(data.prices.map(item => item[1]))
    })()
  }, [])

  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  )
}

export default BalanceChart

const Wrapper = styled.div``
