import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CryptoConverter from '@/app/(pages)/dashboard/products/components/common/Converter';

describe('CryptoConverter', () => {
  const mockPriceUsd = "50000";

  it('should show the USD to BTC converter', () => {
    render(<CryptoConverter priceUsd={mockPriceUsd} />);
    expect(screen.getByText('Convertidor de USD a BTC')).toBeInTheDocument();
    expect(screen.getByLabelText('Cantidad en USD')).toBeInTheDocument();
  });

  it('you must successfully convert from USD to BTC', () => {
    render(<CryptoConverter priceUsd={mockPriceUsd} />);

    const input = screen.getByLabelText('Cantidad en USD');
    fireEvent.change(input, { target: { value: '1000' } });

    expect(screen.getByText('equivale a 0.02000000 BTC')).toBeInTheDocument();
  });

  it('should not show a conversion result if the input is empty', () => {
    render(<CryptoConverter priceUsd={mockPriceUsd} />);

    const input = screen.getByLabelText('Cantidad en USD');
    fireEvent.change(input, { target: { value: '' } });

    expect(screen.queryByText(/equivale a/)).toBeNull();
  });

  it('must handle non-numeric input correctly', () => {
    render(<CryptoConverter priceUsd={mockPriceUsd} />);

    const input = screen.getByLabelText('Cantidad en USD');
    fireEvent.change(input, { target: { value: 'abc' } });

    expect(screen.queryByText(/equivale a/)).toBeNull();
  });
});
