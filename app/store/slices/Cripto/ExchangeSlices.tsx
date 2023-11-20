
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExchangeData } from '@/app/models/ProductModel';
import { fetchExchanges } from '../../thunks/Cripto/ExchangeThunk';
import { ExchangeState } from '@/app/models/StoreModel';

const initialState: ExchangeState = {
  exchanges: [],
  loading: false,
  error: null,
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchanges.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExchanges.fulfilled, (state, action: PayloadAction<ExchangeData>) => {
        state.exchanges = action.payload;
        state.loading = false;
      })
      .addCase(fetchExchanges.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export default exchangeSlice.reducer;
