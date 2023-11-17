"use client";

import CoinTable from "@/app/components/common/table/Index";
import { Coin } from "@/app/models/ProductModel";
import { Box, Container, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const DashboardProductsPage = () => {

  const [coins, setCoins] = useState<Coin[]>([]);
  const [filter, setFilter] = useState('');
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const filtered = coins.filter(coin =>
      coin.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCoins(filtered);
  }, [filter, coins]);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      setCoins(data.data);
      setFilteredCoins(data.data);
    };
    fetchCoins();
  }, []);

  return (
    <Box>
      <Container maxWidth='xl'>
        <TextField
          sx={{minWidth: '300px'}}
          label="Filtrar por nombre de moneda"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
          margin="normal"
        />
      </Container>
      <CoinTable coins={filteredCoins} />
    </Box>
  );
};

export default DashboardProductsPage;
