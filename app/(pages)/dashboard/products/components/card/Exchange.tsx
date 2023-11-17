import axios from "axios";
import { Card, CardContent, Typography, CardMedia, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Exchange } from "@/app/models/ProductModel";

const ExchangeCards: React.FC = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://api.coinlore.net/api/exchanges/")
      .then((response) => {
        const allExchanges: Exchange[] = Object.values(response.data);
        const randomExchanges = allExchanges
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setExchanges(randomExchanges);
      })
      .catch((_) =>
      setError("Error al obtener datos de la API")
      );
  }, []);

  return (
    <>
    {error ? (
        <Typography>{error}</Typography>
      ) : ( <Grid container spacing={2}>
      {exchanges.map((exchange) => (
        <Grid item xs={12} sm={6} md={4} key={exchange.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150x150?text=Exchange"
              alt={exchange.name}
            />
            <CardContent sx={{minHeight: '158px'}}>
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
