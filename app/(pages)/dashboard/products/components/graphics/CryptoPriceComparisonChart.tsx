import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Wraper } from './Index.styles';
import { useAppDispatch } from '@/app/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/Index';
import { fetchTickers } from '@/app/store/thunks/Cripto/TickersThunk';
import { CircularProgress, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CryptoPriceComparisonChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tickers, loading, error } = useSelector(
    (state: RootState) => state.tickers
  );

  useEffect(() => {
    dispatch(fetchTickers());
  }, []);

  if (loading) return <CircularProgress />;

  const data = {
    labels: tickers?.map(crypto => crypto.symbol),
    datasets: [
      {
        label: 'Precio USD',
        data: tickers?.map(crypto => parseFloat(crypto.price_usd)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Wraper>
      {error ? (
        <Typography>{error}</Typography>
      ) : <Bar data={data} />}
    </Wraper>
  )
};

export default CryptoPriceComparisonChart;
