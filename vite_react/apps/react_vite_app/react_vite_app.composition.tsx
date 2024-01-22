import { MemoryRouter } from 'react-router-dom';
import { ReactViteApp } from "./react_vite_app";
    
export const ReactViteAppBasic = () => {
  return (
    <MemoryRouter>
      <ReactViteApp />
    </MemoryRouter>
  );
}