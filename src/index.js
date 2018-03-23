import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './css/index.css';
import App from './App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

// // Redux - Reducers
import { projectReducer } from './reducers/projectReducer' // creating/saving projects and adding lexemes, text to projects
import { dictionaryReducer } from './reducers/dictionaryReducer'
import { textReducer } from './reducers/textReducer'
import { hashtagReducer } from './reducers/hashtagReducer'
import { semanticsReducer } from './reducers/semanticsReducer'
import { authReducer } from './reducers/authReducer'

const rootReducer = combineReducers({ project: projectReducer, dictionary: dictionaryReducer, text: textReducer, hashtag: hashtagReducer, semantics: semanticsReducer, auth: authReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
