import React, {useState} from 'react';
import { Input } from './input';

export const InputComposition = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  
  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
  <Input onAddTask={handleAddTask} />);
};
