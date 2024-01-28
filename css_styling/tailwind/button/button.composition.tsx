import { Button } from "./button";
import '@learnbit/styling.config.tailwind/globals.tailwind.css';

export const BasicButton = () => {
  return (
    <Button type="button">Basic Button</Button>
  );
}

export const StyledButton = () => {
  return (
    <Button type="button" className="border border-red-500 text-red-600 font-semibold text-lg rounded-md">styled button</Button>
  );
}
