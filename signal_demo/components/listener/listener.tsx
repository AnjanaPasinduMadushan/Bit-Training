import React, { ReactNode, useEffect, useState } from 'react';
import Signal from '@anjanaorg/signal_demo.signal-component';

export type ListenerProps = {
  signal: Signal;
  children?: ReactNode;
};

export function Listener({ signal, children }: ListenerProps) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = signal.subscribe(data => {
      setMessage(data);
    });
    
    return () => {
      unsubscribe();
    };
  }, [signal]);

  return (
    <div>
      <h2>Listener Component</h2>
      <p>Received Message: {message}</p>
      {children}
    </div>
  );
}
