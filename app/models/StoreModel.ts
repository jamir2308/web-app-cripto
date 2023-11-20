import { Coin, ExchangeData, MarketStats } from "./ProductModel";

export interface ExchangeState {
    exchanges: ExchangeData;
    loading: boolean;
    error: string | null;
}

export interface CryptoState {
    coins: Coin[];
    loading: boolean;
    error: string | null;
}

export interface TickersState {
    tickers: Coin[];
    loading: boolean;
    error: string | null;
}


export interface GlobalState {
    global: MarketStats[];
    loading: boolean;
    error: string | null;
}