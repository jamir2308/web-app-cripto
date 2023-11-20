export interface Coin {
    id: string;
    symbol: string;
    name: string;
    price_usd: string;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap_usd: string;
    volume24: number;
    rank: number;
    csupply: string;
}

export interface CardIconProps {
    $bgColor: string;
}
  
export interface Exchange {
    id: string;
    name: string;
    url: string;
    country: string;
    volume_usd: number;
}

export interface ExchangeData {
    [key: number]: Exchange;
};

export interface CryptoConverterProps {
    priceUsd: string;
}

export interface CryptoData {
    symbol: string;
    price_usd: string;
}

export interface CryptoDataSet {
    symbol: string;
    percent_change_24h: string;
}

export interface GlobalData {
    total_mcap: number;
    btc_d: string;
    eth_d: string;
}

export interface CoinTableProps {
    coins: Coin[];
}

export interface MarketStats {
    coins_count: number;
    active_markets: number;
    total_mcap: number;
    total_volume: number;
    btc_d: string;
    eth_d: string;
    mcap_change: string;
    volume_change: string;
    avg_change_percent: number;
    volume_ath: number;
    mcap_ath: number;
}