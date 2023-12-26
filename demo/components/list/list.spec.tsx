import React from 'react';
import { render } from '@testing-library/react';
import { List } from './list';

test('TaskList renders correctly', () => {
  const tasks = ['task A', 'task B', 'task C'];
  const { getByText } = render(<List tasks={tasks} />);

  tasks.forEach((task) => {
    const taskElement = getByText(task);
    expect(taskElement).toBeTruthy();
  });
});