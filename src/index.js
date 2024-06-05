// import React from 'react';
// import ReactDOM from 'react-dom/client';
import {render} from "react-dom";
import './index.scss';
import App from './Components/App/App';
import { TodoProvider } from "./Contexts/TodoContext";
import {AuthProvider} from "./Contexts/AuthContext";

const root = document.getElementById("root");
render(<AuthProvider><TodoProvider><App /></TodoProvider></AuthProvider>, root)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AuthProvider><TodoProvider><App /></TodoProvider></AuthProvider>);
