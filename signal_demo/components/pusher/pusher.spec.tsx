import React from 'react';
import { render, screen } from '@testing-library/react';
import { Basic } from './pusher.composition';

describe('Pusher', () => {
  it('renders input and button', () => {
    render(<Basic />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Push Data' })).toBeInTheDocument();
  });
  it('renders additional content', () => {
    render(<Basic />);
    expect(screen.getByText('Additional content inside Pusher Component')).toBeInTheDocument();
  });
});
