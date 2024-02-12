import type { ReactNode } from 'react';

export type SubscriberProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Subscriber({ children }: SubscriberProps) {
  return (
    <div>
      {children}
    </div>
  );
}
