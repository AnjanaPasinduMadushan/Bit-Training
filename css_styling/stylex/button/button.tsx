import type { ReactNode, HTMLAttributes } from 'react'
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

export type ButtonProps = {
  children?: ReactNode;
  style?: StyleXStyles;
} & Omit<HTMLAttributes<HTMLButtonElement>, 'style'>;

const styles = stylex.create({
  button: {
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: {
      default: '#007bff',
      ':hover': '#0056b3',
    },
    padding: '10px 20px',
    borderRadius: 5,
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.8s ease',
  },
});

export function Button({ children, style }: ButtonProps) {
  return (
    <button type="button" {...stylex.props(styles.button, style)}>
      {children}
    </button>
  );
}