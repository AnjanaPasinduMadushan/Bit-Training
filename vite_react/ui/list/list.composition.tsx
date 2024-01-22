import React, { useState } from 'react';
import {List} from './list';

const ListComposition = () => {
  const [tasks] = useState<string[]>([]);

  return (
    <div>
      <List tasks={tasks} />
    </div>
  );
};

export default ListComposition;