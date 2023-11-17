import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChangeArrowIndicator } from '@/app/(pages)/dashboard/products/components/common/ChangeArrowIndicator';

describe('ChangeArrowIndicator', () => {
    it('should show an up icon and the correct color for positive values', () => {
        render(<ChangeArrowIndicator value={10} />);
        const textElement = screen.getByText('10%');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle('color: rgb(135, 247, 159)');
        const svgIcon = screen.getByTestId('ArrowUpwardIcon');
        expect(svgIcon).toBeInTheDocument();
      });

      it('should show a down icon and the correct color for negative values', () => {
        render(<ChangeArrowIndicator value={-5} />);
        const textElement = screen.getByText('-5%');
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle('color: rgb(250, 69, 63)');
        const svgIcon = screen.getByTestId('ArrowDownwardIcon');
        expect(svgIcon).toBeInTheDocument();
      });
});
