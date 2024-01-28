import {Button} from "./button";
import '@learnbit/styling.config.tailwind/globals.tailwind.css';

export const BasicButton = () => {
  return (
    <Button  type="button">Basic Button</Button>
  );
}

export const StyledButton = () => {
  return (
    <Button  type="button" className="bg-red-500 hover:bg-red-700 focus:ring-red-500">styled button</Button>
  );
}
