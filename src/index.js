import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './css/index.css';
import App from './App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { root } from './reducers/reducer'

const store = createStore(root);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
