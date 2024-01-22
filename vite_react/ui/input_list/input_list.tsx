import React, { useState } from 'react';

export type InputListProps = {
  onAddTask: (task: string) => void;
};

export const InputList = ({ onAddTask }: InputListProps) => {
  const [task, setTask] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#6495ED', 
      padding: '20px', 
      borderRadius: '8px', 
      margin: '15px'
      }}>
      <input type="text" value={task} onChange={handleInputChange} placeholder="Enter your first task..."/>
      <button type="button" onClick={handleAddTask}>Add to the To-Do List</button>
    </div>
  );
};
