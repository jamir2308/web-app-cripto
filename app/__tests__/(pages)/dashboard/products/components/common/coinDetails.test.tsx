import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from '@/app/(pages)/dashboard/products/components/common/CoinDetails';

describe('Index Component', () => {
  const mockCoin = {
    name: 'Bitcoin',
    symbol: 'BTC',
    price_usd: '50000',
    rank: '1',
    market_cap_usd: '1000000000',
    volume24: '300000000',
    csupply: '18000000',
    percent_change_1h: '0.5',
    percent_change_24h: '-1.2',
    percent_change_7d: '5.0'
  };

  it('renders without crashing', () => {
    render(<Index {...mockCoin} />);
    expect(screen.getByText('Detalles de la Moneda')).toBeInTheDocument();
  });

  it('displays coin data correctly', () => {
    render(<Index {...mockCoin} />);
    expect(screen.getByText('Bitcoin (BTC)')).toBeInTheDocument();
    expect(screen.getByText('Precio USD')).toBeInTheDocument();
    expect(screen.getByText('50000')).toBeInTheDocument();
  });

  it('renders ChangeArrowIndicator and CardIcon components correctly', () => {
    render(<Index {...mockCoin} />);
    expect(screen.getByText('Cambio 1h')).toBeInTheDocument();
    expect(screen.getByText('0.5%')).toBeInTheDocument();
  });

  it('navigates back to the products page on button click', () => {
    render(<Index {...mockCoin} />);
    const backButton = screen.getByText('Volver');
    userEvent.click(backButton);
  });
});
