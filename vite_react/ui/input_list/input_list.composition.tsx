import React, {useState} from 'react';
import { InputList } from './input_list';

export const InputComposition = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  
  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
  <InputList onAddTask={handleAddTask} />);
};