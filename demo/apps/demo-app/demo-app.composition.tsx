import { MemoryRouter } from 'react-router-dom';
import { DemoApp } from "./demo-app";
    
export const DemoAppBasic = () => {
  return (
    <MemoryRouter>
      <DemoApp />
    </MemoryRouter>
  );
}