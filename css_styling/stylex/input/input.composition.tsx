import { Input } from './input';

export const BasicInput = () => {
  return (
    <Input placeholder="Enter..."/>
  );
}

export const StyledInput = () => {
  return (
    <Input
      style={{
        borderColor: 'red' as any,
      }}
      placeholder='Enter the styled Input'
    />
  );
}