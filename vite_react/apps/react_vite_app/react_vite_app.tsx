import {useState} from 'react';
import { InputList } from '@anjanaorg/vite_react.ui.input_list';
import { List } from '@anjanaorg/vite_react.ui.list';
import {ListCount} from '@anjanaorg/vite_react.ui.list_count';

export function ReactViteApp() {
  const [tasks, setTasks] = useState<string[]>([]);
  const parentContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  const listContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };
  return (
    <div style={parentContainerStyle}>
    <h1>This is a Vite-React with Bit  Demo</h1>

    <div style={listContainerStyle}>
      {tasks.length === 0 ? 'Your List is empty' : <List tasks={tasks} />}
    </div>

    <div style={{ display: 'flex', marginTop: '20px' }}>
      <InputList onAddTask={handleAddTask} />
      <ListCount tasksCount={tasks.length} />
    </div>
  </div>
  )
}