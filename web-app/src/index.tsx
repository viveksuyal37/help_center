import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppRoutes from './routes/AppRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App>
      <AppRoutes />
    </App>
  </React.StrictMode>,
);
