import React, { useState } from 'react';
import { PubSub } from '@anjanaorg/signalsjs.components.pubsub';
import type { ReactNode } from 'react';

export type PublisherProps = {
  pubsub: PubSub;
  children?: ReactNode;
};

export const Publisher = ({ children, pubsub }: PublisherProps) =>{

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setMessage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    pubsub.publish('new_message', message);
    setMessage('');
  }

  return (
    <div>
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      {children}
    </div>
  );
}
