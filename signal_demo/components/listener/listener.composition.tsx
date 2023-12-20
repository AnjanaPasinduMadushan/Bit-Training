import React from 'react';
import Signal from '@anjanaorg/signal_demo.signal-component';
import { Listener } from './listener';

const signal = new Signal();

export const Basic = () => (
  <Listener signal={signal}>
    <p>This is listening to this signal</p>
  </Listener>
);
