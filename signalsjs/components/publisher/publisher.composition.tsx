import React from 'react';
import { PubSub } from '@anjanaorg/signalsjs.components.pubsub';
import { Publisher } from './publisher';

export const BasicPublisher = () => {
  return (
    <Publisher pubsub={new PubSub()}>Publisher Component</Publisher>
  );
}
