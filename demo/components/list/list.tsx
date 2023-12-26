import React from 'react';

export type ListProps = {
  tasks: string[];
};

export const List = ({ tasks }: ListProps) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
        </li>
      ))}
    </ul>
  );
};
