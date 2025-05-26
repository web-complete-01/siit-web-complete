import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Vanilla React
// const em = React.createElement('em', { style: {color: 'red'}}, 'React');

// const title = React.createElement(
//   'h1',
//   { title: 'This is the title', className: 'whatever' },
//   'Hello from ',
//   em,
//   '!'
// );

// React + JSX
// const title = (
//   <h1 title="This is the title again!" className="whatever">
//     Hello from <em style={{ color: 'red' }}>JSX</em>!
//   </h1>
// );
