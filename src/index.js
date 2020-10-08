import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StaticKitProvider } from '@statickit/react';
import * as serviceWorker from './serviceWorker';
import './assets/styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <StaticKitProvider site="c85e136e5bc9">
      <App />
    </StaticKitProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
