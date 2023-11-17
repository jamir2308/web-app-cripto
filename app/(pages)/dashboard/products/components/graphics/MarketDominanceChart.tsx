import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Wraper } from './Index.styles';
import { GlobalData } from '@/app/models/ProductModel';

ChartJS.register(ArcElement, Tooltip, Legend);

const MarketDominanceChart: React.FC = () => {
    const [globalData, setGlobalData] = useState<GlobalData | null>(null);

    useEffect(() => {
        axios.get('https://api.coinlore.net/api/global/')
            .then(response => {
                setGlobalData(response.data[0]);
            })
            .catch(error => console.error('Error al obtener datos de la API:', error));
    }, []);

    const data = {
        labels: ['Bitcoin', 'Ethereum', 'Otras'],
        datasets: [
            {
                data: [
                    parseFloat(globalData?.btc_d || '0'),
                    parseFloat(globalData?.eth_d || '0'),
                    100 - parseFloat(globalData?.btc_d || '0') - parseFloat(globalData?.eth_d || '0')
                ],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
            },
        ],
    };

    return (
        <Wraper>
            <Doughnut data={data} />
        </Wraper>

    )
};

export default MarketDominanceChart;
