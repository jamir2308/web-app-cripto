
import { Card, CardContent, Typography, CardMedia, Grid, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import Link from "next/link";
import { Exchange, ExchangeData } from "@/app/models/ProductModel";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/Index";
import { fetchExchanges } from "@/app/store/thunks/Cripto/ExchangeThunk";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";

const ExchangeCards: React.FC = () => {
  const dispatch = useAppDispatch();
  const { exchanges, loading, error } = useSelector(
    (state: RootState) => state.exchange
  );

  const ramdomExchange = (data: ExchangeData) => {
    const newData = { ...data }
    const allExchanges: Exchange[] = Object.values(newData);
    const randomExchanges = allExchanges
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return randomExchanges
  }

  useEffect(() => {
    dispatch(fetchExchanges());
  }, []);
  if (loading) return <CircularProgress />;

  return (
    <>
      {error ? (
        <Typography>{error}</Typography>
      ) : (<Grid container spacing={2}>
        {exchanges && ramdomExchange(exchanges).map((exchange) => (
          <Grid item xs={12} sm={6} md={4} key={exchange.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/150x150?text=Exchange"
                alt={exchange.name}
              />
              <CardContent sx={{ minHeight: '158px' }}>
                <Typography gutterBottom variant="h5" component="div">
                  <Link
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                  >
                    {exchange.name}
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  País: {exchange.country}
                </Typography>
                <Typography mt={4} variant="body2" color="text.secondary">
                  Volumen (USD): {exchange.volume_usd.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>)}
    </>
  );
};

export default ExchangeCards;
