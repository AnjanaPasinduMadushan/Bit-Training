import { Button } from './button';

export const BasicButton = () => {
  return (
    <Button>Hello StyleX World!</Button>
  );
}

export const StyledButton = () => {
  return (
    <Button
      style={{
        color: 'red' as any,
      }}
    >Styled Button</Button>
  );
}
