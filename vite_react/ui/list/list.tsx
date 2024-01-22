import React from 'react';

export type ListProps = {
  tasks: string[];
};

export const List = ({ tasks }: ListProps) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#6495ED',
      padding: '20px',
      borderRadius: '8px',
      margin: '15px',
    }}>
    <ul>
      {tasks && tasks.map((task, index) => (
        <li key={index}>
          {task}
        </li>
      ))}
    </ul>
    </div>
  );
};