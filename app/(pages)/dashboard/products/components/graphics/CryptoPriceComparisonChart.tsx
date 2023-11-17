import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Wraper } from './Index.styles';
import { CryptoData } from '@/app/models/ProductModel';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CryptoPriceComparisonChart: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    axios.get('https://api.coinlore.net/api/tickers/')
      .then(response => {
        setCryptoData(response.data.data.slice(0, 10));
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const data = {
    labels: cryptoData.map(crypto => crypto.symbol),
    datasets: [
      {
        label: 'Precio USD',
        data: cryptoData.map(crypto => parseFloat(crypto.price_usd)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Wraper>
      <Bar data={data} />
    </Wraper>
  )
};

export default CryptoPriceComparisonChart;
