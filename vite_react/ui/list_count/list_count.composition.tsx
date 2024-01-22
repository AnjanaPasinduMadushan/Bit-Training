import React, { useState } from 'react';
import { ListCount } from './list_count';

export const BasicListCount = () => {

  const [tasksCount] = useState(0);

  return (
    <ListCount tasksCount={tasksCount} />
  );
}
