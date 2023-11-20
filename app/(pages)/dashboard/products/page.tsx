"use client";

import CoinTable from "@/app/components/common/table/Index";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { RootState } from "@/app/store/Index";
import { fetchTickers } from "@/app/store/thunks/Cripto/TickersThunk";
import { Box, CircularProgress, Container, TextField } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const DashboardProductsPage = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useAppDispatch();
  const { tickers, loading, error } = useSelector(
    (state: RootState) => state.tickers
  );

  useEffect(() => {
    dispatch(fetchTickers());
  }, []);

  const filteredCoins = useMemo(() => {
    return tickers.filter(coin =>
      coin.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, tickers]);

  const handleSearch = useCallback((word: string) => {
    setFilter(word);
  }, []);
    
    if (loading) return <CircularProgress />;
  return (
    <Box>
      <Container maxWidth='xl'>
        <TextField
          sx={{minWidth: '300px'}}
          label="Filtrar por nombre de moneda"
          variant="outlined"
          value={filter}
          onChange={(e) => handleSearch(e.target.value)}
          fullWidth
          margin="normal"
        />
      </Container>
      <CoinTable coins={filteredCoins} />
    </Box>
  );
};

export default DashboardProductsPage;
