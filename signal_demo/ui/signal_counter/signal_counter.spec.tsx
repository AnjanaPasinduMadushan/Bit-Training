import { render, fireEvent, screen } from '@testing-library/react';
import { SignalCounter } from './signal_counter';

test('renders SignalCounter and checks if buttons work', () => {
  const count = { value: 0 }; 
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  const onReset = jest.fn();

  render(
    <SignalCounter
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onReset={onReset}
    />
  );

  // Check if the initial count is rendered
  expect(screen.getByText('Current Count : 0')).toBeInTheDocument();

  // Simulate button clicks and check if corresponding functions are called
  fireEvent.click(screen.getByText('Increment'));
  expect(onIncrement).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByText('Decrement'));
  expect(onDecrement).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByText('Reset'));
  expect(onReset).toHaveBeenCalledTimes(1);

  // You can also check if the count updates after button clicks, based on your component logic
});
