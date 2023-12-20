import React from 'react';
import Signal from '@anjanaorg/signal_demo.signal-component';
import { Pusher } from './pusher';

const signal = new Signal();

export const Basic = () => (
  <Pusher signal={signal}>
    <p>Additional content inside Pusher Component</p>
  </Pusher>
);
