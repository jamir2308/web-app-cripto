
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import ExchangeCards from '@/app/(pages)/dashboard/products/components/card/Exchange';

jest.mock('axios');

const mockExchanges = [
  { id: 1, name: 'Exchange 1', url: 'http://example.com/1', country: 'Country 1', volume_usd: 1000 },
  { id: 2, name: 'Exchange 2', url: 'http://example.com/2', country: 'Country 2', volume_usd: 2000 },
  { id: 3, name: 'Exchange 3', url: 'http://example.com/3', country: 'Country 3', volume_usd: 3000 },
]

const mockExchangeData = [
  {
    id: "1",
    name: "Binance",
    year_established: 2017,
    country: "China",
    description: "Leading cryptocurrency exchange",
    url: "https://www.binance.com",
    image: "https://www.example.com/binance.jpg",
    has_trading_incentive: false,
    trust_score: 10,
    trust_score_rank: 1,
    trade_volume_24h_btc: "123456.789"
  },
];

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: mockExchangeData })),
}));
describe('ExchangeCards', () => {

  it('renders without crashing', () => {
    render(<ExchangeCards />);
  });

  it('displays exchanges from API', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: mockExchanges });

    render(<ExchangeCards />);

    await waitFor(() => {
      mockExchanges.forEach((exchange) => {
        expect(screen.getByText(exchange.name)).toBeInTheDocument();
        expect(screen.getByText(`País: ${exchange.country}`)).toBeInTheDocument();
        expect(screen.getByText(`Volumen (USD): ${exchange.volume_usd.toLocaleString()}`)).toBeInTheDocument();
      });
    });
  });

  it('shows an error message when the API fails', async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error('Error de prueba'));
  
    render(<ExchangeCards />);

    await waitFor(() => {
      expect(screen.getByText('Error al obtener datos de la API')).toBeInTheDocument();
    });
  });
});
