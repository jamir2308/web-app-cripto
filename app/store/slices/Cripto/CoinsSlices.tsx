import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { fetchCoins } from "../../thunks/Cripto/CoinsThunk";
import { Coin } from "@/app/models/ProductModel";
import { CryptoState } from "@/app/models/StoreModel";
  

const initialState: CryptoState = {
    coins: [],
    loading: false,
    error: null,
  };

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCoins.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchCoins.fulfilled, (state, action:PayloadAction<Coin[]>) => {
          state.coins = action.payload;
          state.loading = false;
        })
        .addCase(fetchCoins.rejected, (state, action) => {
          state.error = action.error.message ?? 'Ups: ¡Ocurrio un error!';
          state.loading = false;
        });
    },
  });
  
  export default cryptoSlice.reducer;
  