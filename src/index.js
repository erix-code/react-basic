import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App/App';
import { TodoProvider } from "./Contexts/TodoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoProvider><App /></TodoProvider>);
