import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './config/configStore'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { fetchPosts } from './actions'

const store = configStore()
store.dispatch(fetchPosts());

const Root = ({ strore }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/:filter' component={App} />
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>
);


ReactDOM.render(
  <Root />,
  document.getElementById('root'));
registerServiceWorker();
