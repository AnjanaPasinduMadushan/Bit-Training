import {useState} from 'react';
import { Input } from '@anjanaorg/demo.components.input';
import { List } from '@anjanaorg/demo.components.list';

export function DemoApp() {
  const [tasks, setTasks] = useState<string[]>([]);

  const parentContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={parentContainerStyle}>
      <h1>This is a Bit Demo</h1>
      <Input onAddTask={handleAddTask} />
      <h2>List</h2>
      {tasks.length === 0 ? ('Your List is empty'):<List tasks={tasks} />}
    </div>
  )
}