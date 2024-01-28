
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className='', ...rest }: ButtonProps) => {
  const baseClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

  const classes = twMerge(baseClasses, className);

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
};
