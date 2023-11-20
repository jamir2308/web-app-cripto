import { TickersState } from '@/app/models/StoreModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTickers } from '../../thunks/Cripto/TickersThunk';
import { Coin } from '@/app/models/ProductModel';

const initialState: TickersState = {
  tickers: [],
  loading: false,
  error: null,
};

const TickerSlice = createSlice({
  name: 'Tickers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTickers.fulfilled, (state, action: PayloadAction<Coin[]>) => {
        state.tickers = action.payload;
        state.loading = false;
      })
      .addCase(fetchTickers.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export default TickerSlice.reducer;