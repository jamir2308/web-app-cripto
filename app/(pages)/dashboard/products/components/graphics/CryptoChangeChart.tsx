import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { CryptoDataSet } from "@/app/models/ProductModel";

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
  const [cryptoData, setCryptoData] = useState<CryptoDataSet[]>([]);

  useEffect(() => {
    axios
      .get("https://api.coinlore.net/api/tickers/")
      .then((response) => {
        setCryptoData(response.data.data.slice(0, 10));
      })
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }, []);

  const data = {
    labels: cryptoData.map((crypto) => crypto.symbol),
    datasets: [
      {
        label: "Cambio % (24h)",
        data: cryptoData.map((crypto) => parseFloat(crypto.percent_change_24h)),
        fill: false,
        borderColor: "rgba(75, 192, 192, 0.2)",
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <Wraper>
      <Line data={data} />
    </Wraper>
  );
};

export default CryptoChangeChart;
