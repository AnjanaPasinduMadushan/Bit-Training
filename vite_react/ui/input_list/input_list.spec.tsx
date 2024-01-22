import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputList } from './input_list';

test('Input renders correctly', () => {
  const onAddTaskMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(<InputList onAddTask={onAddTaskMock} />);

  const inputElement = getByPlaceholderText('Enter your first task...');
  const addButtonElement = getByText('Add to the To-Do List');

  fireEvent.change(inputElement, { target: { value: 'Testing Task' } });
  fireEvent.click(addButtonElement);

  expect(onAddTaskMock).toHaveBeenCalledWith('Testing Task');
});