import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './store/ThemeContext';
import { AuthContextProvider } from './store/AuthContext';
import { CallContextProvider } from './store/CallContext';

ReactDOM.render(
    <AuthContextProvider>
        <ThemeContextProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ThemeContextProvider>
    </AuthContextProvider>,
    document.getElementById('root')
);
