import React from 'react';
import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';
import './index.css';
import App from './App';

const socket = io('http://localhost:8000');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
