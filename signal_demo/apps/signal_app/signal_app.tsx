import React from 'react';
import { Listener } from '@anjanaorg/signal_demo.components.listener';
import { Pusher } from '@anjanaorg/signal_demo.components.pusher';
import Signal from '@anjanaorg/signal_demo.signal-component';

const signal = new Signal();

const SignalApp = () => (
  <div>
    <Pusher signal={signal}>
      <p>Additional content inside Pusher Component</p>
    </Pusher>
    <Listener signal={signal}>
      <p>This is listening to this signal</p>
    </Listener>
  </div>
);

export default SignalApp;
