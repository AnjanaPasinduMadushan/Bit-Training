import { Button } from './button';

export const BasicButton = () => {
  return (
    <Button>Default Button</Button>
  );
}

export const PrimaryButton = () => {
  return (
    <Button
      isprimary
    >
      Primary Button
    </Button>
  );
}

export const SecondaryButton = () => {
  return (
    <Button
      issecondary
    >
      Secondary Button
    </Button>
  );
}
