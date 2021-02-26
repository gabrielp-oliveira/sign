import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Route } from 'react-router-dom'
import UserProvider from './context/userContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Route basename={process.env.PUBLIC_URL}>
        {console.log(process.env.PUBLIC_URL)}
        <App />
      </Route>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
