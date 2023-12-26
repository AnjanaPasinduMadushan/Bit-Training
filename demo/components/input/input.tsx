import React, { useState } from 'react';

export type InputProps = {
  onAddTask: (task: string) => void;
};


export const Input = ({ onAddTask }: InputProps) => {
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
    <div>
      <input type="text" value={task} onChange={handleInputChange} placeholder="Type in here..."/>
      <button type="button" onClick={handleAddTask}>Add to the List</button>
    </div>
  );
};

