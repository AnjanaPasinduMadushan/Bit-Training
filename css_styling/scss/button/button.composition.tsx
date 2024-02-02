import { Button } from './button';

export const BasicButton = () => {

  const handleButtonClick = () => {
    alert('Basic Button clicked!');
  };

  return (
    <Button className='button' onClick={handleButtonClick}>Basic Button</Button>
  );
}

export const PrimaryButton = () => {

  const handleButtonClick = () => {
    alert('Primary Button clicked!');
  };

  return (
    <Button className='button-primary' onClick={handleButtonClick}>Primary Button</Button>
  );
}

export const SecondaryButton = () => {

  const handleButtonClick = () => {
    alert('Secondary Button clicked!');
  };

  return (
    <Button className='button-secondary' onClick={handleButtonClick}>Secondary Button</Button>
  );
}

export const SpecialButton = () => {

  const handleButtonClick = () => {
    alert('Speacial Button clicked!');
  };

  return (
    <Button className='special-button' onClick={handleButtonClick}>Special Button</Button>
  );
}
