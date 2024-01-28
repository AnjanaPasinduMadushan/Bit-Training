
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className='' }: ButtonProps) => {

  const classes = twMerge('px-4 py-2 font-medium text-red bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500', className);

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
};
