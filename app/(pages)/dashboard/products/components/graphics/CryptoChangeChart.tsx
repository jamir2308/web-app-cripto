import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Wraper } from "./Index.styles";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/Index";
import { fetchTickers } from "@/app/store/thunks/Cripto/TickersThunk";
import { CircularProgress, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChangeChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tickers, loading, error } = useSelector(
    (state: RootState) => state.tickers
  );

  useEffect(() => {
    dispatch(fetchTickers());
  }, []);

  if (loading) return <CircularProgress />;

  const data = {
    labels: tickers?.map((crypto) => crypto.symbol),
    datasets: [
      {
        label: "Cambio % (24h)",
        data: tickers?.map((crypto) => crypto.percent_change_24h),
        fill: false,
        borderColor: "rgba(75, 192, 192, 0.2)",
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <Wraper>
      {error ? (
        <Typography>{error}</Typography>
      ) : <Line data={data} />}
    </Wraper>
  );
};

export default CryptoChangeChart;
