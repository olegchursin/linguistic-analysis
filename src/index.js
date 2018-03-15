import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import './css/index.css';
import App from './App';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { projectReducer } from './reducers/projectReducer' // creating/saving projects and adding lexemes, text to projects
import thunk from "redux-thunk";
import { dictionaryReducer } from './reducers/dictionaryReducer' // external API requests to dictionaries

const rootReducer = combineReducers({ project: projectReducer, dictionary: dictionaryReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
