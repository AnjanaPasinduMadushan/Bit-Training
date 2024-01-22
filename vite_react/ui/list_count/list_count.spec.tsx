import React from 'react';
import { render } from '@testing-library/react';
import { ListCount } from './list_count';

it('renders with the correct text', () => {
  const { getByText } = render(<ListCount tasksCount={5} />); 
  const rendered = getByText('Number of items in the list: 5'); 
  expect(rendered).toBeTruthy();
});
