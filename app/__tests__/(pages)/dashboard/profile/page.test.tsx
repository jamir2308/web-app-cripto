import React from 'react';
import { render } from '@testing-library/react';
import Profile from '@/app/(pages)/dashboard/profile/page';

describe('Profile', () => {
    it('should render the profile information', () => {
        const { getByText, getByRole } = render(<Profile />);
        expect(getByText('Jamir Patiño')).toBeInTheDocument();
        expect(getByText('Senior frontend Developer')).toBeInTheDocument();
        expect(getByRole('button', { name: '3004226213' })).toBeInTheDocument();
        expect(getByRole('button', { name: 'jamir2308@gmail.com' })).toBeInTheDocument();
        expect(getByRole('button', { name: 'Escribeme' })).toBeInTheDocument();
        expect(getByText('Experiencia')).toBeInTheDocument();
        expect(getByText('+4 años')).toBeInTheDocument();
        expect(getByText('Nacionalidad')).toBeInTheDocument();
        expect(getByText('Colombiana')).toBeInTheDocument();
        expect(getByText('Hobbies')).toBeInTheDocument();
    });

    it('should display the avatar', () => {
        const { getByAltText } = render(<Profile />);
        expect(getByAltText('Craig Donin')).toBeInTheDocument();
    });
});
