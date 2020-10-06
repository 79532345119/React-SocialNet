import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './data/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';



  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store = {store}>
          <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )





serviceWorker.unregister();
