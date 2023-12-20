// Listener.spec.ts
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Basic } from './listener.composition';

describe('Listener Component', () => {
  it('renders received message', () => {
    render(<Basic />);
    expect(screen.getByText('Received Message:')).toBeInTheDocument();
  });

  it('renders additional content', () => {
    render(<Basic />);
    expect(screen.getByText('This is listening to this signal')).toBeInTheDocument();
  });
});
