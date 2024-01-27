// input.tsx
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

export type InputProps = {
  style?: StyleXStyles;
  placeholder?: string
};

const styles = stylex.create({
  input: {
    fontSize: 16,
    padding: 12,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor:'#2202f2',
    borderRadius: 5,
    width: '100%',
    outline: 'none',
  },
});

export function Input({ style, placeholder }: InputProps) {
  return (
    <input type="text" placeholder={placeholder} {...stylex.props(styles.input, style)} />
  );
}
