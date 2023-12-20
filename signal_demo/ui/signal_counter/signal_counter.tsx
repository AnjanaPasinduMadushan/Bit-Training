import { useEffect } from "react";

interface SignalCounterProps {
  count: { value: number };
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function SignalCounter({ count, onIncrement, onDecrement, onReset }: SignalCounterProps) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCount = count.value + 5;
      // eslint-disable-next-line no-param-reassign
      count.value = newCount;
    }, 2000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div>
      <h2>Current Count : {count.value}</h2>
      <button type="button" onClick={onIncrement}>Increment</button>
      <button type="button" onClick={onDecrement}>Decrement</button>
      <button type="button" onClick={onReset}>Reset</button>
    </div>
  );
}
