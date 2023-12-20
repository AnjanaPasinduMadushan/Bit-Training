import React from 'react';
import { 
  createRoot, 
  // hydrateRoot 
} from 'react-dom/client';
import SignalApp from './signal_app'

/**
 * comment this in for server-side rendering (ssr) and comment 
 * out of the root.render() invocation below.
*/
// hydrateRoot(
//   document.getElementById("root") as HTMLElement,
//   <BrowserRouter>
//     <SignalApp />
//   </BrowserRouter>
// );

/**
 * mounting for client side rendering.
 */
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <SignalApp />
);