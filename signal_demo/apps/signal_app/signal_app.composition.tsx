import { MemoryRouter } from 'react-router-dom';
import { SignalApp } from "./signal_app";
    
export const SignalAppBasic = () => {
  return (
    <MemoryRouter>
      <SignalApp />
    </MemoryRouter>
  );
}