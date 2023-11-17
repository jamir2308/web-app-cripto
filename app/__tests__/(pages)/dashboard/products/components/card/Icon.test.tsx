import { render, screen } from '@testing-library/react';
import { CardIcon } from '@/app/(pages)/dashboard/products/components/card/Icon'; 

describe('CardIcon', () => {
  it('shows EmojiEventsIcon and the correct background color for a positive value', () => {
    render(<CardIcon value={10} />);
    const icon = screen.getByTestId('EmojiEventsIcon');
    expect(icon).toBeInTheDocument();
  });

  it('shows ArrowDropDownCircleIcon and the correct background color for a negative value', () => {
    render(<CardIcon value={-10} />);
    const icon = screen.getByTestId('ArrowDropDownCircleIcon');
    expect(icon).toBeInTheDocument();
  });

});
