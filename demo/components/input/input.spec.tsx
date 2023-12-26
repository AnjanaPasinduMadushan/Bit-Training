// Input.spec.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './input';

test('Input renders correctly', () => {
  const onAddTaskMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(<Input onAddTask={onAddTaskMock} />);

  const inputElement = getByPlaceholderText('Type in here...');
  const addButtonElement = getByText('Add to the List');

  fireEvent.change(inputElement, { target: { value: 'Testing Task' } });
  fireEvent.click(addButtonElement);

  expect(onAddTaskMock).toHaveBeenCalledWith('Testing Task');
});
