import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Route from './routes/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Route />
    </React.StrictMode>
);
