import React, { useState } from 'react';
import Signal from '@anjanaorg/signal_demo.signal-component';

export type PusherProps = {
  signal: Signal;
  children?: React.ReactNode;
};

export function Pusher({ signal, children }: PusherProps) {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('Nothing to Display');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handlePushData = () => {
    signal.dispatch(inputValue);
    setDisplayValue(inputValue);
  };

  return (
    <div>
      <h2>Pusher Component</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="button" onClick={handlePushData}>Push Data</button>
      <h2>Entered value: {displayValue}</h2>
      {children}
    </div>
  );
}
