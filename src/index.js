import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import {GlobalProvider} from './GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyles/>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
