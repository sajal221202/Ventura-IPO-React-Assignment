import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IPOProvider } from './hooks/useIPOData';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IPOProvider>
      <App />
    </IPOProvider>
  </React.StrictMode>
);


