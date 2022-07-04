import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './css/index.css';
import App from './App';
import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { projectReducer } from './reducers/projectReducer';
import { dictionaryReducer } from './reducers/dictionaryReducer';
import { textReducer } from './reducers/textReducer';
import { hashtagReducer } from './reducers/hashtagReducer';
import { semanticsReducer } from './reducers/semanticsReducer';

require('dotenv').config();

const rootReducer = combineReducers({
  project: projectReducer,
  dictionary: dictionaryReducer,
  text: textReducer,
  hashtag: hashtagReducer,
  semantics: semanticsReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
