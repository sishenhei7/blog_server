import React from 'react';
import ReactDOM from 'react-dom';
import todoApp from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
