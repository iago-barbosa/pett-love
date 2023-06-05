import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Routers } from './routes';
import { UserContextProvider } from './contexts/UserContexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContextProvider>
    <React.StrictMode>
      <Routers />
    </React.StrictMode>
  </UserContextProvider>
);
