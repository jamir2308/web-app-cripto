import { GlobalState } from '@/app/models/StoreModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketStats } from '@/app/models/ProductModel';
import { fetchGlobal } from '../../thunks/Cripto/GlobalThunk';

const initialState: GlobalState = {
  global: [],
  loading: false,
  error: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobal.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGlobal.fulfilled, (state, action: PayloadAction<MarketStats[]>) => {
        state.global = action.payload;
        state.loading = false;
      })
      .addCase(fetchGlobal.rejected, (state, action) => {
        state.error = action.error.message ?? null;
        state.loading = false;
      });
  },
});

export default globalSlice.reducer;