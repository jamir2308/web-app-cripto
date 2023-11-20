
import { configureStore } from '@reduxjs/toolkit';
import CoinsReducer from '@/app/store/slices/Cripto/CoinsSlices';
import ExchangeReducer from '@/app/store/slices/Cripto/ExchangeSlices';
import TickersReducer from '@/app/store/slices/Cripto/TickerSlices';
import GlobalReducer from '@/app/store/slices/Cripto/GlobalSlices';

export const store = configureStore({
  reducer: {
    crypto: CoinsReducer,
    exchange: ExchangeReducer,
    tickers: TickersReducer,
    global: GlobalReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
