import React from 'react';
import { signal } from "@preact/signals-react";
import { SignalCounter } from './signal_counter';

export function CounterComposition() {
  const count = signal(0);

  const incrementCount = () => {
    const newCount = count.value + 1;
    count.value = newCount;
  };

  const decrementCount = () => {
    const newCount = count.value - 1;
    count.value = newCount;
  };

  const resetCount = () => {
    const newCount = 0;
    count.value = newCount;
  };

  return (
    <SignalCounter
      count={count}
      onIncrement={incrementCount}
      onDecrement={decrementCount}
      onReset={resetCount}
    />
  );
}
