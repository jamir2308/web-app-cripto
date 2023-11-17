"use client";

import useApi from "@/app/hooks/UseApi";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import StatsComponent from "../components/graphics/CryptoPriceComparisonChart";
import MarketDominanceChart from "../components/graphics/MarketDominanceChart";
import CryptoChangeChart from "../components/graphics/CryptoChangeChart";
import ExchangeCards from "../components/card/Exchange";
import CryptoConverter from "../components/common/Converter";
import CoinDetails from "@/app/(pages)/dashboard/products/components/common/CoinDetails";
import { Coin } from "@/app/models/ProductModel";
import { DetailContainer } from "../components/card/Card.styles";

const Details = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { data, loading, error } = useApi(`ticker/?id=${id}`);

    if (loading) return <CircularProgress />;
    if (error) return <Typography>Error: {error}</Typography>;

    const coin: Coin = data && data[0];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <DetailContainer>
                <CoinDetails {...coin} />
            </DetailContainer>
            <DetailContainer>
                <CryptoConverter priceUsd={coin.price_usd} />
            </DetailContainer>
            <DetailContainer>
                <Grid item xs={12} sm={12} md={12} container direction='column'>
                    <Typography variant="h3" color="#90b2b9" mb={4}>
                        Datos de algunas CriptoMonedas
                    </Typography>
                    <Box display='flex' flexDirection='row' flexWrap='wrap'>
                        <StatsComponent />
                        <MarketDominanceChart />
                        <CryptoChangeChart />
                    </Box>
                </Grid>
            </DetailContainer>
            <DetailContainer>
                <Grid item xs={12} sm={12} md={12} container direction='row'>
                    <Typography variant="h3" color="#90b2b9" mb={4}>
                        Exchange
                    </Typography>
                    <ExchangeCards />
                </Grid>
            </DetailContainer>
        </Box>
    );
};

export default Details;
