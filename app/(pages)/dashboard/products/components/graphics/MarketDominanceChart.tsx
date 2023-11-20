import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Wraper } from "./Index.styles";
import { MarketStats } from "@/app/models/ProductModel";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/Index";
import { fetchGlobal } from "@/app/store/thunks/Cripto/GlobalThunk";
import { CircularProgress } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketDominanceChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { global, loading, error } = useSelector(
    (state: RootState) => state.global
  );

  useEffect(() => {
    dispatch(fetchGlobal());
  }, []);

  if (loading) return <CircularProgress />;
  const globalData: MarketStats = global && global[0];
  const data = {
    labels: ["Bitcoin", "Ethereum", "Otras"],
    datasets: [
      {
        data: [
          parseFloat(globalData?.btc_d || "0"),
          parseFloat(globalData?.eth_d || "0"),
          100 -
            parseFloat(globalData?.btc_d || "0") -
            parseFloat(globalData?.eth_d || "0"),
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
      },
    ],
  };

  return (
    <Wraper>
      <Doughnut data={data} />
    </Wraper>
  );
};

export default MarketDominanceChart;
