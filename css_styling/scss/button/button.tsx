import type { ReactNode } from 'react';
import './button.scss';

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button type='button' className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
  );
}